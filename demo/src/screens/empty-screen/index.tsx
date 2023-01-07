import { useTheme } from '@mui/material';
import React, { FC } from 'react';
import { useBaseScreenProps, WTheme } from 'wface';

export const EmptyScreen: FC = () => {
  const baseScreenProps = useBaseScreenProps();
  const theme = useTheme<WTheme>();

  return (
    <div>
      <div>
        <button onClick={() => baseScreenProps.showSnackbar("OK", "success")}>Click</button>
        <pre>
          {JSON.stringify(theme.designDetails, null, 2)}
        </pre>
      </div>
      Empty screen
    </div>
  );
}