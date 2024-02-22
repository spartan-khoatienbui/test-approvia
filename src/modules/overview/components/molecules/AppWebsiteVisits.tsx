import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { ApexOptions } from 'apexcharts';

import { Chart, useChart } from '~shared';

// ----------------------------------------------------------------------

type Props = {
  title: string;
  subheader: string;
  chart: Omit<ApexOptions, 'series'> & {
    series: {
      name: string;
      type: string;
      fill: string;
      data: number[];
    }[];
  };
} & CardProps;

const AppWebsiteVisits: React.FC<Props> = ({ title, subheader, chart, ...other }) => {
  const { labels, colors, series } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: (series || []).map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} visits`;
          }
          return value;
        },
      },
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
};

export default AppWebsiteVisits;
