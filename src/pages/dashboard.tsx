import dynamic from 'next/dynamic';
import { Flex, Box, SimpleGrid, Text, theme } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

function Dashboard() {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2021-07-10T00:00:00.000Z',
        '2021-07-11T00:00:00.000Z',
        '2021-07-12T00:00:00.000Z',
        '2021-07-13T00:00:00.000Z',
        '2021-07-14T00:00:00.000Z',
        '2021-07-15T00:00:00.000Z',
        '2021-07-16T00:00:00.000Z',
      ],
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
    },
    fill: {
      opacity: 0.4,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.8,
        opacityTo: 0.4,
      },
    },
  };

  const series = [
    {
      name: 'series',
      data: [5, 10, 15, 20, 25, 30, 35],
    },
  ];

  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex
        marginX="auto"
        marginY={6}
        paddingX={6}
        width="100%"
        maxWidth={1480}
      >
        <Sidebar />

        <SimpleGrid minChildWidth={320} flex={1} gap={4}>
          <Box
            padding={[6, 8]}
            paddingBottom={4}
            borderRadius={8}
            backgroundColor="gray.800"
          >
            <Text marginBottom={4} fontSize="lg">
              Inscritos da semana
            </Text>

            <Chart type="area" height={160} options={options} series={series} />
          </Box>

          <Box
            padding={[6, 8]}
            paddingBottom={4}
            borderRadius={8}
            backgroundColor="gray.800"
          >
            <Text marginBottom={4} fontSize="lg">
              Taxa de abertura
            </Text>

            <Chart type="area" height={160} options={options} series={series} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
