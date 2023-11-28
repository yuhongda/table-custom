# table-custom 📦

> A table component with sorting and toggle display on columns. Based on [ant-design](https://github.com/ant-design/ant-design)

## Installation

```bash
npm i @silverage/table-custom --save
yarn add @silverage/table-custom
pnpm add @silverage/table-custom
```

`antd` is in `peerDependencies`, choose your own version.

⚠️ NOTE: The data pesistence is using `use-local-storage-state`.

- For React 17 and below, use `npm i use-local-storage-state@17`
- For React 18 and later, use `npm i use-local-storage-state`
(For details, see [this](https://github.com/astoilkov/use-local-storage-state))

## Usage

✌️ Compatible with all the props of Ant-Design Table

```jsx
import { TableCustom } from '@silverage/table-custom'

<TableCustom columns={columns} dataSource={dataSource} />
```

🪄 Boom! Just replace Ant-Design `<Table />` with `<TableCustom />`, It's all done.

![image](https://github.com/yuhongda/table-custom/assets/259410/2b2bf1f2-d067-4dd1-87b8-ed91685c561c)

## Options

### `columns`

type: `ColumnTypeCustom<T>[]`

default: `undefined`

> Inherited from ColumnType in antd Table. Adding `disableCustom` prop to indicate that the column disable for customization.

### `storageKey`

type: `string`

default: `undefined`

> Data Persistence Key. Set it to use localstorage to persist settings.

### `modalTitle`

type: `string`

default: `''`

> The setting modal's title.

### `savedColumns`

type: `any[]`

default: `undefined`

> Do data persistence yourself

### `sortable`

type: `boolean`

default: `undefined`

> Enable sorting column.

### `sortHandler`

type: `ReactNode`

default: `undefined`

> Customize sorting handler icon.

### `openCustomModal`

type: `boolean`

default: `undefined`

> Control setting model visible by yourself.

### `onChecklistChange`

type: `(checkedList: any[], sortedList: any[]) => void`

default: `undefined`

> The callback function when column changed.

### `onCustomModalClose`

type: `() => void`

default: `undefined`

> The callback function when setting modal closed.
