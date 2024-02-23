import * as React from 'react';
import React__default, { ReactNode } from 'react';
import { TableProps, ColumnType } from 'antd/lib/table';

interface ColumnTypeCustom<T> extends ColumnType<T> {
    disableCustom?: boolean;
    children?: ColumnTypeCustom<T>[];
    label?: string;
    value?: any;
}
interface TableCustomProps<T> extends TableProps<T> {
    columns: ColumnTypeCustom<T>[];
    storageKey?: string;
    /**
     * @description: 通过接口获取的columns
     */
    savedColumns?: any[];
    onChecklistChange?: (checkedList: any[], sortedList: any[]) => void;
    modalTitle?: ReactNode;
    sortable?: boolean;
    sortHandler?: ReactNode;
    openCustomModal?: boolean;
    onCustomModalClose?: () => void;
    [key: string]: any;
}
declare const TableCustom: React__default.FC<TableCustomProps<any>>;

declare const _default: {
    TableCustom: React.FC<TableCustomProps<any>>;
};

export { TableCustom, _default as default };
