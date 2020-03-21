import React, { useState } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie as PieMui,
  Tooltip,
} from 'recharts';
import ChartSelectInput from './shared/ChartSelectInput';
import { getPieData } from './shared/helpers';

const Pie = ({ data }) => {
  const [accessor, setAccessor] = useState();
  const { inputOptions, pieData, percentMissing, totalCount } = getPieData(
    data,
    accessor,
  );

  return (
    <>
      <ChartSelectInput update={setAccessor} options={inputOptions} />
      {accessor && (
        <>
          <div className='chart__container'>
            <ResponsiveContainer aspect={1}>
              <PieChart>
                <PieMui
                  dataKey='value'
                  data={pieData}
                  fill='#8884d8'
                  label={({ name }) => name}
                />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p>
            {percentMissing === null
              ? `All entries have a value for ${accessor}`
              : `${accessor} data missing for ${percentMissing}% of the ${totalCount} entries`}
          </p>
        </>
      )}
    </>
  );
};

export default Pie;
