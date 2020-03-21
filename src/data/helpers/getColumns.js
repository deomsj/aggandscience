const getColumns = results => {
  const totalCount = results.length;
  const keys = Object.keys(results[0]);

  const columns = keys.map(key => {
    const valueFrequency = results.reduce((options, result) => {
      const value = result[key];
      return {
        ...options,
        [value]: (options[value] || 0) + 1,
      };
    }, {});

    const numEmpty = valueFrequency[''];
    delete valueFrequency[''];
    const percentMissing = Math.round((1000 * numEmpty) / totalCount) / 10;
    const valueOptions = Object.keys(valueFrequency);
    const isNumber = valueOptions.reduce(
      (isNumber, option) => isNumber && !Number.isNaN(option),
      true,
    );
    const numOptions = valueOptions.length;
    let average = null;
    if (isNumber) {
      const sum = Object.entries(valueFrequency).reduce(
        (sum, entry) => sum + Number(entry[0]) * entry[1],
        0,
      );
      average = Math.round((100 * sum) / numOptions) / 100;
    }

    return {
      Header: key,
      accessor: key,
      percentMissing,
      numOptions,
      ...(isNumber ? { average } : {}),
      ...(numOptions < 20 ? { valueFrequency } : {}),
    };
  });

  return columns;
};

module.exports = { getColumns };
