import React from 'react';
import ReactDOM from "react-dom";
import * as Screens from './src/screens';
import { IConfiguration, useAppContext, useUserContext, WFace, WIcon, WTheme } from 'wface';
import AuthService from '././src/services/auth-service';

const configuration: IConfiguration = {
  projectName: 'WFace Demo',
  screenList: {
    DemoScreen: Screens.DemoScreen,
    DemoScreen2: Screens.DemoScreen2,
    DemoScreen3: Screens.DemoScreen3,
    DemoScreen4: Screens.DemoScreen4,
    DemoScreen5: Screens.DemoScreen5,
    EmptyScreen: Screens.EmptyScreen,
    SettingsScreen: Screens.SettingsScreen,
    ContentDefinitionScreen: () => <div>ContentDefinitionScreen</div>
  },
  useAuthService: AuthService,
  useLocalStorage: true,
  theme: {
    designDetails: {
      pageSx: {
        padding: (theme: WTheme) => theme.spacing(1),
      }
    }
  },
  api: {
    baseUrl: 'http://localhost:8080',
    useToken: () => {
      const userContext = useUserContext();
      return userContext.token;
    }
  },
  search: true,
  useRightContextItems: () => {
    const appContext = useAppContext();

    return [
      {
        id: 'id1',
        text: 'Ayarlar',
        onClick: () => appContext.openScreenById('settings')
      }
    ];
  },
  components: {
    TopbarRightItems: () => (
      <WIcon sx={{ ml: 1 }}>notifications</WIcon>
    )
  }
}

const App = () => {
  return <WFace configuration={configuration} />;
}

ReactDOM.render(<App />, document.getElementById("root"));