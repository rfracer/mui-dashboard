import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
};

// Generate Sales Data
function createData(day: string, percentage?: number) {
  return { day, percentage };
}

export const Chart = ({ title }: Props) => {
  const data = [
    createData('Monday', 90),
    createData('Thuesday', 85),
    createData('Wendsday', 100),
    createData('Thursday', 50),
    createData('Friday', 68),
  ];

  const theme = useTheme();

  return (
    <React.Fragment>
      <Typography
        color='secondary'
        variant='h4'
        component='h2'
        marginBottom={3}
      >
        {title}
      </Typography>
      <ResponsiveContainer height={300}>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />

          <XAxis
            dataKey='day'
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <Tooltip formatter={(value, name) => value + '%'} />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position='left'
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Percentage (%)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type='monotone'
            dataKey='percentage'
            stroke={theme.palette.primary.main}
            dot={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
};

export default Chart;
