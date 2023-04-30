import { useTheme } from '@mui/material';
import React, { FC, useCallback, useState } from 'react';
import { useApi, useAppContext, useBaseScreenProps, useUserContext, WSelect, WTheme } from 'wface';
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme: any) => ({
  selectRoot: {
    '& .w_select__input-container': {
      background: 'white'
    }
  }
}));

export const EmptyScreen: FC = () => {
  const { showSnackbar, changeScreenMode } = useBaseScreenProps();
  const [data, setData] = useState<any>(null);
  const api = useApi();
  const { queryParams } = useAppContext();
  const classes = useStyles();

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
        <WSelect
          label="city"
          options={[
            { label: 'Adana', value: '1' },
            { label: 'Gaziantep', value: '27' },
            { label: 'İstanbul', value: '34' },
            { label: 'Şanlıurfa', value: '63' }
          ]}
          className={classes.selectRoot}
        />
      </div>
    </div>
  );
}