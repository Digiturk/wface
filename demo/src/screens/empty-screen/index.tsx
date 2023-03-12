import { useTheme } from '@mui/material';
import React, { FC, useCallback } from 'react';
import { useApi, useBaseScreenProps, WTheme } from 'wface';

export const EmptyScreen: FC = () => {
  const { showSnackbar, changeScreenMode } = useBaseScreenProps();
  const theme = useTheme<WTheme>();
  const api = useApi();

  const onClick = useCallback(async () => {
    changeScreenMode('loading');
    try {
      const t = api.get('/deneme');
      showSnackbar('success');
    } catch (e) {
      showSnackbar('Hata');
    }
    changeScreenMode('normal');
  }, [api]);

  return (
    <div>
      <div>
        <button onClick={onClick}>Click</button>
        <pre>
          {JSON.stringify(theme.designDetails, null, 2)}
        </pre>
      </div>
      Empty screen
    </div>
  );
}