import React from 'react';
import TextField from '@material-ui/core/TextField';
import { debounce } from '../../shared/helpers';

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeFilter({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
  const debouncedSetFilter = React.useCallback(debounce(setFilter), []);

  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach(row => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    min = Math.floor(min);
    max = Math.ceil(max);
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <div className='column-filter number-range'>
      <TextField
        className='number-range__input'
        type='number'
        onClick={e => e.stopPropagation()}
        onChange={e => {
          const val = e.target.value;
          debouncedSetFilter((old = []) => [
            val ? parseInt(val, 10) : undefined,
            old[1],
          ]);
        }}
        placeholder={`${min}`}
      />
      <span>to</span>
      <TextField
        className='number-range__input'
        type='number'
        onClick={e => e.stopPropagation()}
        onChange={e => {
          const val = e.target.value;
          debouncedSetFilter((old = []) => [
            old[0],
            val ? parseInt(val, 10) : undefined,
          ]);
        }}
        placeholder={`${max}`}
      />
    </div>
  );
}

export default NumberRangeFilter;
