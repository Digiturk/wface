import React, { FC } from 'react';
import { WCard, WCardContent, WCardHeader } from 'wface';

import { DateTimePicker } from '@mui/x-date-pickers';

export const EmptyScreen: FC = () => {
  return (
    <WCard>
      <WCardHeader title="TextField Test" />
      <WCardContent>
        <DateTimePicker
          sx={{
            width: '100%'
          }}
          views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
          format="dd.MM.yyyy HH:mm:ss"
        />
      </WCardContent>
    </WCard>
  );
}