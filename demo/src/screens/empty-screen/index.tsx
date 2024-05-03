import React, { FC } from 'react';
import { WCard, WCardContent, WCardHeader } from 'wface';

import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export const EmptyScreen: FC = () => {
  return (
    <WCard>
      <WCardHeader title="TextField Test" />
      <WCardContent>

        <LocalizationProvider dateAdapter={AdapterDateFns as any}>
          <DateTimePicker
            sx={{
              width: '100%'
            }}
            views={['year', 'month', 'day', 'hours', 'minutes', 'seconds']}
            format="dd.MM.yyyy HH:mm:ss"
          />
        </LocalizationProvider>
      </WCardContent>
    </WCard>
  );
}