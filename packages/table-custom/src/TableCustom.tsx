/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { Checkbox, Col, Divider, Modal, Row, Table } from 'antd'
import type { ColumnType } from 'antd/lib/table'
import styled from 'styled-components'
import { SettingOutlined } from '@ant-design/icons'
import useLocalStorageState from 'use-local-storage-state'
import s from './style.module.scss'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  verticalListSortingStrategy,
  arrayMove
} from '@dnd-kit/sortable'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const EXPIRE_TIME = 24 * 60 * 60 * 1000

const Container = styled.div`
  position: relative;
  &:hover {
    .anticon {
      opacity: 1;
    }
  }
`

const Toolbar = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 10;
  display: flex;
  & > .anticon {
    opacity: 0;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    margin: auto;
  }
`

const Handler = styled.span`
  cursor: move;
  font-size: 16px;
  font-weight: bold;
`

export interface ColumnTypeCustom<T> extends ColumnType<T> {
  disableCustom?: boolean
  children?: ColumnTypeCustom<T>[]
  label?: string
  value?: any
}

export interface TableCustomProps<T> {
  columns: ColumnTypeCustom<T>[]
  storageKey?: string
  /**
   * @description: 通过接口获取的columns
   */
  savedColumns?: any[]
  onChecklistChange?: (checkedList: any[], sortedList: any[]) => void
  modalTitle?: ReactNode
  sortable?: boolean
  sortHandler?: ReactNode
  openCustomModal?: boolean
  onCustomModalClose?: () => void
  [key: string]: any
}

const TableCustom: React.FC<TableCustomProps<any>> = ({
  columns,
  storageKey,
  savedColumns,
  onChecklistChange,
  modalTitle,
  sortable,
  sortHandler,
  openCustomModal,
  onCustomModalClose,
  ...rest
}) => {
  const [visible, setVisible] = useState(false)

  const [columsLocalStorage, setColumsLocalStorage, { removeItem }] = useLocalStorageState<any>(
    `table-custom-${storageKey}`
  )

  const [sortInfo, setSortInfo] = useState<any>(null)
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8
      }
    })
  )

  const { syncTime } = columsLocalStorage || {}
  // 超时清空localstorage
  if (storageKey && +new Date() - syncTime > EXPIRE_TIME) {
    removeItem()
  }

  const resetColumns = (columns: ColumnTypeCustom<any>[]): ColumnTypeCustom<any>[] =>
    columns.map((c: any) => {
      if (c.children && c.children.length > 0) {
        return {
          ...c,
          label: c.title,
          value: c.key ?? c.dataIndex ?? c.title,
          children: resetColumns(c.children)
        }
      }
      return { ...c, label: c.title, value: c.key ?? c.dataIndex ?? c.title }
    })
  const options = resetColumns(columns)
  const parentKeys = options.map((o: any) => o.value)
  const isNoChildrenOptions = !options.find((o: any) => o.children)

  // 判断是否存在不可自定义的列，如果不存在则表示不匹配，使用默认值
  const isNotMatch =
    options
      .filter((item) => item.disableCustom)
      .flatMap((o: any) =>
        o.children ? [o.value, ...o.children.map((c: any) => c.value)] : o.value
      )
      .filter((item) => savedColumns?.includes(item))?.length === 0

  const [sortedList, setSortedList] = useState(
    storageKey && columsLocalStorage?.sortedList ? columsLocalStorage?.sortedList : options
  )
  const [checkedList, setCheckedList] = useState(
    storageKey && columsLocalStorage?.checkedList
      ? columsLocalStorage?.checkedList
      : savedColumns && savedColumns?.length > 0 && !isNotMatch
      ? savedColumns
      : options.flatMap((o: any) =>
          o.children ? [o.value, ...o.children.map((c: any) => c.value)] : o.value
        )
  )

  useEffect(() => {
    if (openCustomModal) {
      setVisible(true)
    }
  }, [openCustomModal])

  useEffect(() => {
    if (sortInfo) {
      let newColumns = [...sortedList]
      if (sortInfo.value === null) {
        const oldIndex = sortInfo.oldIndex
        const newIndex = sortInfo.newIndex
        newColumns = arrayMove(newColumns, oldIndex, newIndex)
      } else {
        const foundChangedIndex = newColumns.findIndex((c: any) => c.value === sortInfo.value)
        if (foundChangedIndex === -1) return
        const children = newColumns[foundChangedIndex].children || []
        newColumns[foundChangedIndex].children = arrayMove(
          children,
          sortInfo.oldIndex,
          sortInfo.newIndex
        )
      }
      setSortedList(newColumns)
      setSortInfo(null)
    }
  }, [sortInfo, sortedList])

  const filterColumns = useCallback(
    (columns: any[]) =>
      columns
        .map((c: any) => {
          const newColumn = { ...c }
          if (c.children && c.children.length > 0) {
            newColumn.children = filterColumns(c.children)
          }

          if (checkedList.includes(c.key ?? c.dataIndex ?? c.title)) {
            return newColumn
          }
          return false
        })
        .filter(Boolean),
    [checkedList]
  )

  const tableColumns = useMemo(() => {
    if (sortable) {
      return filterColumns(sortedList)
    }
    return filterColumns(options)
  }, [JSON.stringify(sortedList), filterColumns, sortable, options])

  const sortedOptions = useMemo(() => {
    if (sortedList) {
      // sort options by sortedList
      const newColumns = [...options]
      newColumns.sort((a: any, b: any) => {
        const aIndex = sortedList.findIndex((c: any) => c.value === a.value)
        const bIndex = sortedList.findIndex((c: any) => c.value === b.value)
        return aIndex - bIndex
      })
      return newColumns.map((c: any) => {
        const foundItem = sortedList.find((item: any) => item.value === c.value)?.children || []
        const children = [...(c.children || [])]
        return {
          ...c,
          children:
            children && children.length > 0
              ? children.sort((a: any, b: any) => {
                  const aIndex = foundItem.findIndex((item: any) => item.value === a.value)
                  const bIndex = foundItem.findIndex((item: any) => item.value === b.value)
                  return aIndex - bIndex
                })
              : children
        }
      })
    }
  }, [JSON.stringify(sortedList), options])

  useEffect(() => {
    setCheckedList(
      storageKey && columsLocalStorage?.checkedList
        ? columsLocalStorage?.checkedList
        : savedColumns && savedColumns?.length > 0 && !isNotMatch
        ? savedColumns
        : options.flatMap((o: any) =>
            o.children ? [o.value, ...o.children.map((c: any) => c.value)] : o.value
          )
    )
  }, [columns])

  useEffect(() => {
    setCheckedList(
      tableColumns.flatMap((o: any) =>
        o.children ? [o.value, ...o.children.map((c: any) => c.value)] : o.value
      )
    )
  }, [JSON.stringify(tableColumns)])

  useEffect(() => {
    if (storageKey) {
      setColumsLocalStorage({
        ...columsLocalStorage,
        checkedList,
        syncTime: +new Date()
      })
    }

    if (onChecklistChange) {
      onChecklistChange(checkedList, sortedList)
    }
  }, [JSON.stringify(checkedList)])

  useEffect(() => {
    if (storageKey) {
      setColumsLocalStorage({
        ...columsLocalStorage,
        sortedList,
        syncTime: +new Date()
      })
    }

    if (onChecklistChange) {
      onChecklistChange(checkedList, sortedList)
    }
  }, [JSON.stringify(sortedList)])

  const handleDragEnd =
    ({ value }: Record<string, any>) =>
    (event: DragEndEvent) => {
      const { active, over } = event
      const { items } = active.data.current?.sortable ?? {}

      if (active && over && active.id !== over?.id && items) {
        const foundItem =
          sortedOptions
            ?.flatMap((o: any) => [o, ...o.children])
            .find((item: any) => item.value === over.id)
        if (foundItem?.disableCustom) {
          return
        }

        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over?.id)

        setSortInfo({
          value,
          oldIndex,
          newIndex
        })
      }
    }

  return (
    <Container>
      {openCustomModal === undefined ? (
        <Toolbar>
          <SettingOutlined onClick={() => setVisible(true)} />
        </Toolbar>
      ) : null}
      <Table columns={tableColumns} {...rest} />
      <Modal
        title={modalTitle}
        width={800}
        open={visible}
        visible={visible}
        onOk={() => {
          setVisible(false)
          if (onCustomModalClose) {
            onCustomModalClose()
          }
        }}
        onCancel={() => {
          setVisible(false)
          if (onCustomModalClose) {
            onCustomModalClose()
          }
        }}
        footer={null}
      >
        <Checkbox.Group
          value={checkedList}
          onChange={(checkedValues) => {
            // 取消勾选
            if (checkedList.length > checkedValues.length) {
              const uncheckItem = checkedList.filter((c: string) => !checkedValues.includes(c))
              // 取消勾选的是父节点
              if (parentKeys.includes(uncheckItem[0])) {
                const childrenKeysToUncheck = options
                  .filter(
                    (o: any) => uncheckItem[0] === o.value && !checkedValues.includes(o.value)
                  )
                  .flatMap((o: any) =>
                    o.children ? [...o.children.map((c: ColumnTypeCustom<any>) => c.value)] : false
                  )
                  .filter(Boolean)
                setCheckedList([
                  ...new Set([
                    ...checkedValues.filter((c: any) => !childrenKeysToUncheck.includes(c))
                  ])
                ])
              } else {
                const parentKeysToUncheck = options
                  .filter((o: any) => {
                    if (o.children && o.children.length > 0) {
                      return o.children.every((c: any) => !checkedValues.includes(c.value))
                    }
                    return false
                  })
                  .map((o: any) => o.value)
                setCheckedList([
                  ...new Set([
                    ...checkedValues.filter((c: any) => !parentKeysToUncheck.includes(c))
                  ])
                ])
              }
            } else {
              // 勾选
              const checkItem = checkedValues.filter((c) => !checkedList.includes(c))
              if (parentKeys.includes(checkItem[0])) {
                const childrenKeysToCheck = options
                  .filter((o: any) => checkItem[0] === o.value && checkedValues.includes(o.value))
                  .flatMap((o: any) =>
                    o.children ? [...o.children.map((c: ColumnTypeCustom<any>) => c.value)] : false
                  )
                  .filter(Boolean)
                setCheckedList([...new Set([...checkedValues, ...childrenKeysToCheck])])
              } else {
                const parentKeysToCheck = options
                  .filter((o: any) => {
                    if (o.children && o.children.length > 0) {
                      return o.children.find((c: any) => checkedValues.includes(c.value))
                    }
                    return false
                  })
                  .map((o: any) => o.value)
                setCheckedList([...new Set([...checkedValues, ...parentKeysToCheck])])
              }
            }
          }}
          style={{ width: '100%', flexDirection: 'column' }}
        >
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd({ value: null })}
          >
            <Row style={{ width: '100%' }}>
              <SortableContext
                items={sortedOptions?.map((o) => o.value) ?? []}
                strategy={rectSortingStrategy}
              >
                {sortedOptions?.map((o: any, index: number) => {
                  const checkedChildren = o.children?.filter((c: any) =>
                    checkedList.includes(c.value)
                  )
                  const indeterminate =
                    checkedChildren?.length > 0 && checkedChildren?.length < o.children?.length

                  return isNoChildrenOptions ? (
                    <CheckboxItem
                      key={o.value}
                      id={o.value}
                      {...o}
                      sortable={sortable}
                      sortHandler={sortHandler}
                    />
                  ) : (
                    <CheckboxGroupItem
                      key={o.value}
                      id={o.value}
                      {...o}
                      indeterminate={indeterminate}
                      sortable={sortable}
                      sortHandler={sortHandler}
                    >
                      {o.children && o.children.length > 0 && (
                        <DndContext
                          sensors={sensors}
                          collisionDetection={closestCenter}
                          onDragEnd={handleDragEnd({ value: o.value })}
                        >
                          <Row style={{ width: '100%' }}>
                            <SortableContext
                              items={o.children.map((c: ColumnTypeCustom<any>) => c.value)}
                              strategy={rectSortingStrategy}
                            >
                              {o.children.map((c: any, i: number) => (
                                <CheckboxItem
                                  key={c.value}
                                  id={c.value}
                                  {...c}
                                  sortable={sortable}
                                  sortHandler={sortHandler}
                                />
                              ))}
                            </SortableContext>
                          </Row>
                        </DndContext>
                      )}
                    </CheckboxGroupItem>
                  )
                })}
              </SortableContext>
            </Row>
          </DndContext>
        </Checkbox.Group>
      </Modal>
    </Container>
  )
}

/**
 * components for sorting
 */
const CheckboxItem: React.FC<
  ColumnTypeCustom<any> & { sortable?: boolean; sortHandler?: ReactNode; id: string }
> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } =
    useSortable({
      id: props.id,
      disabled: props.disableCustom,
      resizeObserverConfig: {}
    })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <Col span={6} ref={setNodeRef} style={style} {...attributes}>
      <Checkbox value={props.value} disabled={props.disableCustom}>
        {props.label}
      </Checkbox>
      {props.sortable ? (
        <Handler ref={setActivatorNodeRef} {...listeners}>
          {props.sortHandler ?? '::'}
        </Handler>
      ) : null}
    </Col>
  )
}

const CheckboxGroupItem: React.FC<
  ColumnTypeCustom<any> & {
    sortable?: boolean
    sortHandler?: ReactNode
    id: string
    indeterminate: boolean
  }
> = (props) => {
  const { attributes, listeners, setNodeRef, transform, transition, setActivatorNodeRef } =
    useSortable({
      id: props.id,
      disabled: props.disableCustom,
      resizeObserverConfig: {}
    })
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    width: '100%'
  }

  return (
    <div key={props.value} ref={setNodeRef} style={style} {...attributes}>
      <Divider orientation="left" orientationMargin="0" style={{ margin: '24px 0 8px 0' }}>
        <Checkbox
          value={props.value}
          disabled={props.disableCustom}
          indeterminate={props.indeterminate}
        >
          <span style={{ fontSize: 16 }}>{props.label}</span>
        </Checkbox>
        {props.sortable ? (
          <Handler ref={setActivatorNodeRef} {...listeners}>
            {props.sortHandler ?? '::'}
          </Handler>
        ) : null}
      </Divider>
      {props.children}
    </div>
  )
}

export { TableCustom as default }
