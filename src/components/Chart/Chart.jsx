import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';
import css from './Chart.module.css';


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div >
        <p>{`${payload[0].value * 1000} ml`}</p>
      </div>
    );
  }
  return null;
};

const Chart = ({ data }) => {
    return (
      <div className={css.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 5, bottom: 0, left: -15 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#66c18c" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#66c18c" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              padding={{ left: 20 }}
            />
            <YAxis
              domain={[0, 2.5]}
              ticks={[0, 0.5, 1, 1.5, 2, 2.5]}
              tickFormatter={value => `${value} L`}
              axisLine={false}
              tickLine={false}
              padding={{ bottom: 20 }}
              tick={{ textAnchor: 'start', dx: -35 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="linear"
              dataKey="uv"
              stroke="#66c18c"
              fillOpacity={1}
              fill="url(#colorUv)"
              dot={{ stroke: '#66c18c', strokeWidth: 2, fill: '#ffffff', r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
};

export default Chart;
