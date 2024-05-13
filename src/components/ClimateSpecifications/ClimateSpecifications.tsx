import {Box, BoxProps} from '@components';
import React from 'react';
import {IndexType, ClimateItem} from './components/ClimateItem';

interface ClimateDataProps extends BoxProps {
  indices: Record<IndexType, string>;
}

export function ClimateSpecifications({
  indices,
  ...boxProps
}: ClimateDataProps) {
  return (
    <Box
      height={100}
      backgroundColor="grayBlack"
      borderRadius="s10"
      flexDirection="row"
      {...boxProps}>
      <ClimateItem type="wind" value={indices.wind} />
      <ClimateItem type="humidity" value={indices.humidity} />
      <ClimateItem type="rain" value={indices.rain} />
    </Box>
  );
}
