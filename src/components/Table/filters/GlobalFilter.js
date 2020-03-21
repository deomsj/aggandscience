import React from 'react';
import TextField from '@material-ui/core/TextField';
import { debounce } from '../../shared/helpers';

function GlobalFilter({ preGlobalFilteredRows, setGlobalFilter }) {
  const count = preGlobalFilteredRows.length;
  const debouncedSetFilter = React.useCallback(debounce(setGlobalFilter), []);

  return (
    <TextField
      className='global-search-input'
      onChange={e => debouncedSetFilter(e.target.value || undefined)}
      placeholder={`Search ${count} records...`}
    />
  );
}

export default GlobalFilter;
