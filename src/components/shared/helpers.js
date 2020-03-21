export const debounce = func => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), 400);
  };
};

export const getPieData = (data, accessor) => {
  const columnOptions = data.columns.filter(column => !!column.valueFrequency);
  const inputOptions = columnOptions.map(column => column.accessor);
  const totalCount = data.rows.length;
  const selectedColumn =
    columnOptions.find(col => col.accessor === accessor) || {};
  const percentMissing = selectedColumn.percentMissing;
  let pieData = null;

  if (accessor) {
    pieData = Object.entries(selectedColumn.valueFrequency).map(
      ([name, value]) => ({
        name,
        value,
      }),
    );
  }

  return { inputOptions, pieData, percentMissing, totalCount };
};

export const getScatterData = (x, y, data) => {
  const columnOptions = data.columns.filter(column => !!column.average);
  const inputOptions = columnOptions.map(column => column.accessor);

  let countMissingXorY = 0;
  const scatterData = data.rows.filter(row => {
    if (row[x] === '' || row[y] === '') {
      countMissingXorY++;
      return false;
    }
    return true;
  });

  const totalCount = data.rows.length;
  const percentMissing =
    Math.round((1000 * countMissingXorY) / totalCount) / 10;

  return { inputOptions, scatterData, percentMissing, totalCount };
};
