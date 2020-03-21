import React from 'react';
import { fuzzyTextFilterFn } from './TextFilter';

const useFilterTypes = () =>
  React.useMemo(() => ({ text: fuzzyTextFilterFn }), []);

export default useFilterTypes;
