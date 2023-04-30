import {
  MenuTreeUtil,
  WCircularProgress, WIcon, WIconButton, WTheme, BaseScreenProps, BaseScreenPropsContext,
  useConfiguration
} from '../../../';
import React, { FC, useCallback, useRef, useState } from 'react';
import { useAppContext } from '../../../store';
import { useTheme } from '@mui/material';
import { useSnackbar } from 'notistack';
import { IMenuTreeItem } from '../../../ioc';


const WScreenWrapper: FC<{ menuTreeItem?: IMenuTreeItem; }> = ({ menuTreeItem }) => {
  const [pageError, setPageError] = useState<any>(null);
  const theme = useTheme<WTheme>();
  const screenRef = useRef();
  const appContext = useAppContext();
  const { enqueueSnackbar } = useSnackbar();
  const configuration = useConfiguration();

  try {
    const changeScreenMode = useCallback((mode: 'normal' | 'loading' = 'normal') => {
      appContext.changeScreenMode(mode);
    }, [appContext.changeScreenMode]);

    const openScreen = useCallback((screen: string, initialValues: any): boolean => {
      const item = MenuTreeUtil.findByName(appContext.menuTree, screen);
      if (!item) {
        return false;
      }

      appContext.openScreen(item, initialValues);
      return true;
    }, [appContext.menuTree, appContext.openScreen]);

    const showSnackbar = useCallback((message: string, type: 'error' | 'success' | 'warning' | 'info' = 'info', duration: number = 5000) => {
      enqueueSnackbar(message, {
        variant: type,
        autoHideDuration: duration,
        action: <WIconButton id="btn-close-snackbar"><WIcon style={{ color: '#ffffff99' }} iconSize="small">close</WIcon></WIconButton>
      });
    }, []);

    const getBaseScreenProps = () => ({
      changeScreenMode,
      openScreen,
      showSnackbar: showSnackbar,
    } as BaseScreenProps);

    if (pageError) {
      // @ts-ignore
      return <configuration.components.ErrorPage {...pageError} />
    }

    const Screen = configuration.screenList[menuTreeItem?.screen || ''] as any;

    if (!Screen) { 
      console.log('asdklj', menuTreeItem?.screen)     
      // @ts-ignore
      return <configuration.components.NoPage />
    }

    return (
      <div style={{ position: 'relative', width: '100%', height: '100%', }}>
        {appContext.screenMode === 'loading' &&
          <div style={{ display: 'table', position: 'absolute', width: '100%', height: 'calc(100% + 8px)', background: '#3f51b544', zIndex: (theme?.zIndex?.modal || 0) + 1 }}>
            <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
              <WCircularProgress size={60} />
            </div>
          </div>
        }
        <div style={{ padding: theme?.designDetails?.pagePadding, paddingBottom: 10 }}>
          <BaseScreenPropsContext.Provider value={getBaseScreenProps()}>
            <BaseScreenPropsContext.Consumer>
              {(value: BaseScreenProps) => <Screen ref={screenRef} {...value} />}
            </BaseScreenPropsContext.Consumer>
          </BaseScreenPropsContext.Provider>
        </div>
      </div>
    );
  } catch(error) {
    setPageError({ error });
    return null;
  }
};

export default WScreenWrapper;