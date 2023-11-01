import React, { useState } from 'react'
import styled from 'styled-components'
import { TableCustom } from '../../../packages/table-custom/src'
import { Button, Typography } from 'antd'
import * as data from './data'

const Container = styled.div`
  width: 100%;
  height: 500px;
`

export const Example: React.FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Container>
      <Typography.Title>Basic</Typography.Title>
      <TableCustom
        modalTitle="Basic"
        columns={data.basicColumns()}
        dataSource={data.basicData()}
        rowKey="id"
        scroll={{
          x: 'max-content'
        }}
      />
      <Typography.Title>Group</Typography.Title>
      <TableCustom
        modalTitle="Group"
        columns={data.groupColumns()}
        dataSource={data.groupData()}
        rowKey="id"
        scroll={{
          x: 'max-content'
        }}
      />
      <Typography.Title>Sortable</Typography.Title>
      <TableCustom
        modalTitle={<div>Sortable</div>}
        storageKey="sortable"
        columns={data.groupColumns()}
        dataSource={data.groupData()}
        rowKey="id"
        scroll={{
          x: 'max-content'
        }}
        sortable
      />
      <Typography.Title>Control Custom Modal Open</Typography.Title>
      <Button onClick={() => setVisible(true)}>Open</Button>
      <TableCustom
        modalTitle={<div>openCustomModal</div>}
        columns={data.groupColumns()}
        dataSource={data.groupData()}
        rowKey="id"
        scroll={{
          x: 'max-content'
        }}
        sortable
        openCustomModal={visible}
        onCustomModalClose={() => setVisible(false)}
      />
    </Container>
  )
}
