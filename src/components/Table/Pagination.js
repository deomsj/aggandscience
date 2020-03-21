import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { debounce } from '../shared/helpers';

const Pagination = ({
  pageSize,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  gotoPage,
  nextPage,
  previousPage,
  setPageSize,
}) => {
  const debouncedGotoPage = React.useCallback(debounce(gotoPage), []);
  return (
    <div className='pagination'>
      <span className='pagination__text'>
        Page
        <TextField
          className='go-to-page'
          type='number'
          defaultValue='1'
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            debouncedGotoPage(page);
          }}
        />
        of {pageOptions.length}
      </span>
      <span className='pagination__buttons'>
        <IconButton
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          aria-label='first page'>
          <FirstPageIcon />
        </IconButton>
        <IconButton
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          aria-label='previous page'>
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={() => nextPage()}
          disabled={!canNextPage}
          aria-label='next page'>
          <KeyboardArrowRight />
        </IconButton>
        <IconButton
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          aria-label='last page'>
          <LastPageIcon />
        </IconButton>
      </span>
      <span className='pagination__select'>
        <Select
          className='page-size-select'
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}>
          {[10, 20, 30, 40, 50].map(pageSize => (
            <MenuItem key={pageSize} value={pageSize}>
              Show {pageSize}
            </MenuItem>
          ))}
        </Select>
      </span>
    </div>
  );
};

export default Pagination;
