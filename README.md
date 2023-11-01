# table-custom 📦

> A table component with sorting and toggle display on columns. Based on [ant-design](https://github.com/ant-design/ant-design)

## Installation

```bash
npm i @silverage/table-custom --save
yarn add @silverage/table-custom
pnpm add @silverage/table-custom
```

`antd` is in `peerDependencies`, choose your version.

⚠️ NOTE: The data pesistence is using `use-local-storage-state`.

- For React 17 and below, use `npm i use-local-storage-state@17`
- For React 18 and later, use `npm i use-local-storage-state`

## Usage

✌️ Compatible with all the props of Ant-Design Table

```jsx
import { TableCustom } from '@silverage/table-custom'

<TableCustom columns={columns} dataSource={dataSource} />
```

🪄 Boom! Just replace Ant-Design `<Table />` with `<TableCustom />`, It's all done.

![image](https://github.com/yuhongda/table-custom/assets/259410/2b2bf1f2-d067-4dd1-87b8-ed91685c561c)

## Options

### `storageKey`

type: `string`

default: `undefined`

> Data Persistence Key. Set it to use localstorage to persist settings.

### `speed`

type: `number`

default: `200`

> It's how many words can be read per minute.

### `time`

type: `number`

default: `undefined`

> Set this will skip the read time calculation, and just use this number as total read time to convert to emoji.

### `displayRender`

type: `(emoji: ReactNode[], totalTime: number) => ReactNode`

default: `undefined`

> You can make your own custom display by this option.
