import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter as ScatterSet,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import ChartSelectInput from './shared/ChartSelectInput';
import { getScatterData } from './shared/helpers';

const Scatter = ({ data }) => {
  const [x, setX] = useState();
  const [y, setY] = useState();
  const {
    inputOptions,
    scatterData,
    percentMissing,
    totalCount,
  } = getScatterData(x, y, data);
  return (
    <>
      <div className='multiple-inputs-container'>
        <ChartSelectInput
          update={setX}
          options={inputOptions}
          label='Select X Axis'
        />
        <ChartSelectInput
          update={setY}
          options={inputOptions}
          label='Select Y Axis'
        />
      </div>
      {x && y && (
        <>
          <div className='chart__container'>
            <ResponsiveContainer aspect={1}>
              <ScatterChart
                width={400}
                height={400}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid />
                <XAxis dataKey={x} type='number' name={x} />
                <YAxis dataKey={y} type='number' name={y} />
                <ScatterSet name='A school' data={scatterData} fill='#8884d8' />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <p>
            {Number.isNaN(percentMissing)
              ? `All entries have a value for ${x} and ${y}`
              : `${x} and/or ${y} data missing for ${percentMissing}% of the ${totalCount} entries`}
          </p>
        </>
      )}
    </>
  );
};

export default Scatter;
