import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import * as Screens from "./src/screens";
import {
  IConfiguration,
  useAppContext,
  useUserContext,
  WFace,
  WButton,
  WTheme,
  WBox,
  WGrid,
  WIconButton,
  WIcon,
} from "wface";
import AuthService from "././src/services/auth-service";
import { Search } from "../src/container/components/w-main-page/search";
import { MyProfileMenu } from "../src/container/components/w-main-page/my-profile-menu";
import { Horizontal, WindowWidthType } from "horizontal";

const Toolbar = (props:any) => {
  console.log(props);
  const userContext = useUserContext();
  const appContext = useAppContext();
  const rightContextItems = configuration.useRightContextItems
  ? configuration.useRightContextItems()
  : [];
  console.log(userContext);
  
      const changeMode = useCallback(
        (mode: "CRM" | "CMS") => {
          appContext.setValue("screenMode", mode);
        },
        [appContext]
      );

  return <>
  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
    <WIconButton
            id="main-hamburger-button"
            color="inherit"
            aria-label="open drawer"
            style={{
              transition: "all ease 250ms",
              transform: props.menuOpen ? "rotate(180deg)" : "none",
            }}
            onClick={props.onMenuToggle}
          >
            <WIcon>
              {props.menuOpen && Horizontal.getType() !== WindowWidthType.LG
                ? "close"
                : "home"}
            </WIcon>
          </WIconButton>
    <img src="https://www.tutorialspoint.com/assets/questions/media/426142-1668760765.png" alt="tutorialpoint"  style={{height:40}}/>
    
    <Search />
    
    <WBox display={"flex"}>
          <WButton
            variant="contained"
            color="secondary"
            onClick={() => {
              changeMode("CRM");
            }}
          >
            CRM
          </WButton>
          <WButton
            variant="contained"
            color="secondary"
            onClick={() => {
              changeMode("CMS");
            }}
          >
            CMS
          </WButton>
        </WBox>
      <span>{userContext?.data?.name}</span>
    <MyProfileMenu items={rightContextItems} />

    
    </div>
  </>;
};

const configuration: IConfiguration = {
  projectName: "WFace Demo",
  screenList: {
    DemoScreen: Screens.DemoScreen,
    DemoScreen2: Screens.DemoScreen2,
    DemoScreen3: Screens.DemoScreen3,
    DemoScreen4: Screens.DemoScreen4,
    DemoScreen5: Screens.DemoScreen5,
    EmptyScreen: Screens.EmptyScreen,
    SettingsScreen: Screens.SettingsScreen,
    ContentDefinitionScreen: () => <div>ContentDefinitionScreen</div>,
  },
  useAuthService: AuthService,
  useLocalStorage: true,
  theme: {
    designDetails: {
      pageSx: {
        padding: (theme: WTheme) => theme.spacing(1),
      },
    },
  },
  api: {
    baseUrl: "http://localhost:8080",
    useToken: () => {
      const userContext = useUserContext();
      return userContext.token;
    },
  },
  search: true,
  useRightContextItems: () => {
    const appContext = useAppContext();

    return [
      {
        id: "id1",
        text: "Ayarlar",
        onClick: () => appContext.openScreenById("settings"),
      },
    ];
  },
  components: {
    // Toolbar: Toolbar ,
    ToolbarDrawerIcons: {
      Menu: "format_align_right",
      Close: "error",
    },
    // TopbarRightItems: () => {
    //   const appContext = useAppContext();

    //   const changeMode = useCallback(
    //     (mode: "CRM" | "CMS") => {
    //       appContext.setValue("screenMode", mode);
    //     },
    //     [appContext]
    //   );

    //   return (
    //     <WBox display={"flex"}>
    //       <WButton
    //         variant="contained"
    //         color="secondary"
    //         onClick={() => {
    //           changeMode("CRM");
    //         }}
    //       >
    //         CRM
    //       </WButton>
    //       <WButton
    //         variant="contained"
    //         color="secondary"
    //         onClick={() => {
    //           changeMode("CMS");
    //         }}
    //       >
    //         CMS
    //       </WButton>
    //     </WBox>
    //   );
    // },
  },
};

const App = () => {
  return <WFace configuration={configuration} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
