import React, { useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
  useBlockLayout,
  useResizeColumns,
} from 'react-table';
import Drawer from './Drawer';
import { GlobalFilter, useFilterTypes } from './filters';
import { useDefaultColumn, ColumnHeader } from './Columns';
import Row from './Row';
import Pagination from './Pagination';
import addColumnFilters from './filters/addColumnFilters';

const Table = ({ data }) => {
  const columnsWithFilters = useMemo(() => addColumnFilters(data.columns), [
    data.columns,
  ]);
  const filterTypes = useFilterTypes();
  const defaultColumn = useDefaultColumn();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    allColumns,
    allColumnsHidden,
    getToggleHideAllColumnsProps,
    state: { globalFilter, pageIndex, pageSize },
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTable(
    {
      columns: columnsWithFilters,
      data: data.rows,
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useBlockLayout,
    useResizeColumns,
  );

  const pageProps = {
    pageIndex,
    pageSize,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  };

  return (
    <>
      <div className='global-search-container'>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <Drawer
          allColumns={allColumns}
          getToggleHideAllColumnsProps={getToggleHideAllColumnsProps}
        />
      </div>
      {allColumnsHidden ? null : (
        <>
          <div className='table' {...getTableProps()}>
            <div className='thead'>
              {headerGroups.map(headerGroup => (
                <div className='tr' {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(ColumnHeader)}
                </div>
              ))}
            </div>
            <div className='tbody' {...getTableBodyProps()}>
              {page.map(Row(prepareRow))}
            </div>
          </div>
          <Pagination {...pageProps} />
        </>
      )}
    </>
  );
};

export default Table;
