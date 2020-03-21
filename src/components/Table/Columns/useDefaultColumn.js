import React from 'react';
import { TextFilter } from '../filters';

const useDefaultColumn = () =>
  React.useMemo(
    () => ({
      Filter: TextFilter,
      minWidth: 120,
      width: 200,
      maxWidth: 800,
    }),
    [],
  );

export default useDefaultColumn;
