/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Checkbox, Col, Divider, Modal, Row, Table } from 'antd'
import type { ColumnType } from 'antd/lib/table'
import styled from 'styled-components'
import { SettingOutlined } from '@ant-design/icons'
import useLocalStorageState from 'use-local-storage-state'

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
  onChecklistChange?: (checkedList: any[]) => void
  [key: string]: any
}

const TableCustom: React.FC<TableCustomProps<any>> = ({
  columns,
  storageKey,
  savedColumns,
  onChecklistChange,
  ...rest
}) => {
  const [visible, setVisible] = useState(false)

  const [columsLocalStorage, setColumsLocalStorage, { removeItem }] = useLocalStorageState<any>(
    `data-insight-table-custom-${storageKey}`
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

  const filterColumns = (columns: any[]) =>
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
      .filter(Boolean)
  const tableColumns = filterColumns(columns)

  useEffect(() => {
    if (storageKey) {
      setColumsLocalStorage({
        checkedList,
        syncTime: +new Date()
      })
    }

    if (onChecklistChange) {
      onChecklistChange(checkedList)
    }
  }, [JSON.stringify(checkedList)])

  return (
    <Container>
      <Toolbar>
        <SettingOutlined onClick={() => setVisible(true)} />
      </Toolbar>
      <Table columns={tableColumns} {...rest} />
      <Modal
        title="指标设置"
        width={800}
        open={visible}
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
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
          <Row style={{ width: '100%' }}>
            {options?.map((o: any) => {
              const checkedChildren = o.children?.filter((c: any) => checkedList.includes(c.value))
              const indeterminate =
                checkedChildren?.length > 0 && checkedChildren?.length < o.children?.length

              return isNoChildrenOptions ? (
                <Col span={6}>
                  <Checkbox
                    value={o.value}
                    disabled={o.disableCustom}
                    indeterminate={indeterminate}
                  >
                    <span style={{ fontSize: 16 }}>{o.label}</span>
                  </Checkbox>
                </Col>
              ) : (
                <div key={o.value} style={{ width: '100%' }}>
                  <Divider
                    orientation="left"
                    orientationMargin="0"
                    style={{ margin: '24px 0 8px 0' }}
                  >
                    <Checkbox
                      value={o.value}
                      disabled={o.disableCustom}
                      indeterminate={indeterminate}
                    >
                      <span style={{ fontSize: 16 }}>{o.label}</span>
                    </Checkbox>
                  </Divider>
                  {o.children && o.children.length > 0 && (
                    <Row style={{ width: '100%' }}>
                      {o.children.map((c: any) => (
                        <Col span={6}>
                          <Checkbox value={c.value} disabled={c.disableCustom}>
                            {c.label}
                          </Checkbox>
                        </Col>
                      ))}
                    </Row>
                  )}
                </div>
              )
            })}
          </Row>
        </Checkbox.Group>
      </Modal>
    </Container>
  )
}

export { TableCustom as default }
