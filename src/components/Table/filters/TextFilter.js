import React from 'react';
import matchSorter from 'match-sorter';
import TextField from '@material-ui/core/TextField';
import { debounce } from '../../shared/helpers';

export function TextFilter({ column: { preFilteredRows, setFilter } }) {
  const count = preFilteredRows.length;
  const debouncedSetFilter = React.useCallback(debounce(setFilter), []);

  return (
    <TextField
      className='column-filter'
      onChange={e => debouncedSetFilter(e.target.value || undefined)}
      onClick={e => e.stopPropagation()}
      placeholder={`Search ${count} records...`}
    />
  );
}

export function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] });
}
// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val;
