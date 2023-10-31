import * as React from 'react';
import React__default from 'react';
import { ColumnType } from 'antd/lib/table';

interface ColumnTypeCustom<T> extends ColumnType<T> {
    disableCustom?: boolean;
    value?: any;
}
interface TableCustomProps<T> {
    columns: ColumnTypeCustom<T>[];
    storageKey?: string;
    /**
     * @description: 通过接口获取的columns
     */
    savedColumns?: any[];
    onChecklistChange?: (checkedList: any[]) => void;
    [key: string]: any;
}
declare const TableCustom: React__default.FC<TableCustomProps<any>>;

declare const _default: {
    TableCustom: React.FC<TableCustomProps<any>>;
};

export { TableCustom, _default as default };
