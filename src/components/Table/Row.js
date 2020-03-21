import React from 'react';

const Row = prepareRow => row => {
  prepareRow(row);
  return (
    <div className='tr' {...row.getRowProps()}>
      {row.cells.map(cell => {
        return (
          <div className='td' {...cell.getCellProps()}>
            {cell.render('Cell')}
          </div>
        );
      })}
    </div>
  );
};

export default Row;
