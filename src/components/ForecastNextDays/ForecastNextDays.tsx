import React from 'react';

import {Box, BoxProps, Text} from '@components';
import {ForecastNextDayCard} from './ForecastNextDayCard/ForecastNextDayCard';

const teste = [
  {
    dia: 'Segunda',
    min: '18',
    max: '22',
  },
  {
    dia: 'terça',
    min: '18',
    max: '22',
  },
  {
    dia: 'Quarta',
    min: '18',
    max: '22',
  },
  {
    dia: 'Quinta',
    min: '18',
    max: '22',
  },
  {
    dia: 'Sexta',
    min: '18',
    max: '22',
  },
  {
    dia: 'Sábado',
    min: '18',
    max: '22',
  },
  {
    dia: 'Domingo',
    min: '18',
    max: '22',
  },
];

interface ForecastNextDaysProps extends BoxProps {}

export function ForecastNextDays({...boxProps}: ForecastNextDaysProps) {
  return (
    <Box {...boxProps}>
      <Text mb="s20" preset="paragraphSmall" semiBold>
        Próximos 7 Dias
      </Text>
      {teste.map(({dia}, i) => {
        return <ForecastNextDayCard key={i.toString()} day={dia} />;
      })}
    </Box>
  );
}
