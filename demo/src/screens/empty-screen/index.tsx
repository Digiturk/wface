import { useTheme } from '@mui/material';
import React, { FC, useCallback, useState } from 'react';
import { useApi, useAppContext, useBaseScreenProps, useUserContext, WTheme } from 'wface';

export const EmptyScreen: FC = () => {
  const { showSnackbar, changeScreenMode } = useBaseScreenProps();
  const [data, setData] = useState<any>(null);
  const api = useApi();
  const { queryParams } = useAppContext();

  const onClick = useCallback(async () => {
    setData(null);

    changeScreenMode('loading');
    try {
      const t = await api.get('https://jsonplaceholder.typicode.com/todos/1');
      if (t.hasError) {
        showSnackbar('Hata: ' + t.errorMessage, 'error');
      } else {
        setData(t.data);
      }
    } catch (e) {
      showSnackbar('Hata');
    }
    changeScreenMode('normal');
  }, [api]);

  return (
    <div>
      <div>
        <button onClick={onClick}>Click {queryParams["de"]}</button>
        <pre>
          {JSON.stringify({
            data,
            queryParams
          }, null, 2)}
        </pre>
      </div>
    </div>
  );
}