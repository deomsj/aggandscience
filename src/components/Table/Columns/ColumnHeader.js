import React from 'react';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import CloseIcon from '@material-ui/icons/Close';

const ColumnHeader = column => (
  <div className='th' {...column.getHeaderProps(column.getSortByToggleProps())}>
    <div className='column-header'>
      {column.render('Header')}
      <TableSortLabel
        active={column.isSorted}
        direction={column.isSortedDesc ? 'desc' : 'asc'}
      />
      <CloseIcon className='th__hide-column' onClick={column.toggleHidden} />
      <div>{column.render('Filter')}</div>
      <div
        {...column.getResizerProps()}
        className={`resizer ${column.isResizing ? 'isResizing' : ''}`}
        onClick={e => e.stopPropagation()}
      />
    </div>
  </div>
);

export default ColumnHeader;
