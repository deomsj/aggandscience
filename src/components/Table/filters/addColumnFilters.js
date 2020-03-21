import NumberRangeFilter from './NumberRangeFilter';

const addColumnFilters = columns =>
  columns.map(({ isNumber, ...column }) => ({
    ...column,
    ...(isNumber
      ? {
          Filter: NumberRangeFilter,
          filter: 'between',
        }
      : {}),
  }));

export default addColumnFilters;
