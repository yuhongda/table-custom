import React, { useState } from 'react'
import styled from 'styled-components'
import { TableCustom } from '../../../packages/table-custom/src'
import { Typography } from 'antd'
import * as data from './data'

const Container = styled.div`
  width: 100%;
  height: 500px;
`

export const Example: React.FC = () => {
  return (
    <Container>
      <Typography.Title>Basic</Typography.Title>
      <TableCustom
        columns={data.basicColumns()}
        dataSource={data.basicData()}
        rowKey="id"
        scroll={{
          x: 'max-content'
        }}
      />
      <Typography.Title>Group</Typography.Title>
      <TableCustom
        columns={data.groupColumns()}
        dataSource={data.groupData()}
        rowKey="id"
        scroll={{
          x: 'max-content'
        }}
      />
      <Typography.Title>Sortable</Typography.Title>
      <TableCustom
        storageKey='sortable'
        columns={data.groupColumns()}
        dataSource={data.groupData()}
        rowKey="id"
        scroll={{
          x: 'max-content'
        }}
        sortable
      />
    </Container>
  )
}
