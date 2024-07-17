import { FC } from 'react';
import Box from '@mui/material/Box';
import Card, { CardProps } from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { ApexOptions } from 'apexcharts';

import { Chart, useChart } from '~shared';
import { fNumber } from '~utils';

// ----------------------------------------------------------------------

type Props = {
  chart: Omit<ApexOptions, 'series'> & { series: { value: number; label: string }[] };
  title: string;
  subheader: string;
} & CardProps;

const AppConversionRates: FC<Props> = ({ title, subheader, chart, ...other }) => {
  const { colors, series } = chart;

  const chartSeries = (series || []).map((i) => i.value);

  const chartOptions = useChart({
    colors,
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '28%',
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: series.map((i) => i.label),
    },
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }}>
        <Chart
          dir="ltr"
          type="bar"
          series={[{ data: chartSeries }]}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
};

export default AppConversionRates;
