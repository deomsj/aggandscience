import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const ChartSelectInput = ({ update, options, label = 'Select Data' }) => {
  return (
    <Autocomplete
      options={options}
      onChange={(_, value) => update(value)}
      renderInput={params => (
        <TextField {...params} label={label} variant='outlined' />
      )}
    />
  );
};

export default ChartSelectInput;
