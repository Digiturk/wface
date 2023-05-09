import { useCallback, useEffect, useMemo } from "react";
import { IMenuTreeItem, useAppContext, useUserContext } from "wface";

const CMSScreens: IMenuTreeItem[] = [
  {
    id: "ContentDefinitionScreen",
    text: "Content Definition Screen",
    screen: "ContentDefinitionScreen",
    subNodes: [
      {
        id: "NewContentDefinition",
        text: "New Content Definition",
        screen: "NewContentDefinition",
      },
      {
        id: "DefineCatalog",
        text: "Define Catalog",
        screen: "DefineCatalog",
      },
    ],
  },
  {
    id: "CompetitionDefinitionScreen",
    text: "Sport Definition Screen",
    screen: "CompetitionDefinitionScreen",
    subNodes: [
      {
        id: "CompetitionDefinitionScreen",
        text: "Sport Definition",
        screen: "CompetitionDefinitionScreen",
      },
      {
        id: "CategoryScreen",
        text: "Sport Genre",
        screen: "CategoryScreen",
      },
      {
        id: "LeagueScreen",
        text: "Competition",
        screen: "LeagueScreen",
      },
      {
        id: "TeamScreen",
        text: "Team",
        screen: "TeamScreen",
      },
      {
        id: "ShowScreen",
        text: "Show",
        screen: "ShowScreen",
      },
    ],
  },
  {
    id: "ProgrammingGuidelineScreen",
    text: "Programming Guideline Screen",
    screen: "ProgrammingGuidelineScreen",
  },
  {
    id: "ShowcaseScreen",
    text: "Showcase Screen",
    screen: "ShowcaseScreen",
    subNodes: [
      {
        id: "ShowcaseScreen",
        text: "Showcase Screen",
        screen: "ShowcaseScreen",
      },
      {
        id: "BannerScreen",
        text: "Banner Screen",
        screen: "BannerScreen",
      },
    ],
  },
  {
    id: "ConfigurationUpdateScreen",
    text: "Configuration Update Screen",
    screen: "ConfigurationUpdateScreen",
    subNodes: [
      {
        id: "ConfigurationUpdateScreen",
        text: "Flag Update ",
        screen: "ConfigurationUpdateScreen",
      },
      {
        id: "FreeChannelsScreen",
        text: "Free Channels Vod",
        screen: "FreeChannelsScreen",
      },
      {
        id: "FreePreviewsScreen",
        text: "Free Preview",
        screen: "FreePreviewsScreen",
      },
      {
        id: "PartnerOperationsScreen",
        text: "Partner Operation",
        screen: "PartnerOperationsScreen",
      },
      {
        id: "LiveToVodScreen",
        text: "Live To VOD Operations",
        screen: "LiveToVodScreen",
      },
    ],
  },
  {
    id: "MenuDefinitionScreen",
    text: "Menu Definition Screen",
    screen: "MenuDefinitionScreen",
  },
  {
    id: "VoucherScreen",
    text: "Voucher Screen",
    screen: "VoucherScreen",
  },
  {
    id: "CustomerOperationsScreen",
    text: "Customer Operations",
    screen: "CustomerOperationsScreen",
    subNodes: [
      {
        id: "CustomerOperationsScreen",
        text: "Customer Search",
        screen: "CustomerOperationsScreen",
      },
      {
        id: "NewCustomerScreen",
        text: "New Customer",
        screen: "NewCustomerScreen",
      },
    ],
  },
];

const CRMScreens: IMenuTreeItem[] = [
  {
    id: "DemoScreen",
    text: "DemoScreen",
    screen: "DemoScreen",
    icon: "save",
  },
  {
    id: "DemoScreen2",
    text: "DemoScreen2",
    screen: "DemoScreen2",
  },
  {
    id: "DemoScreen3",
    text: "DemoScreen3",
    screen: "DemoScreen3",
  },
  {
    id: "DemoScreen4",
    text: "DemoScreen4",
    screen: "DemoScreen4",
  },
  {
    id: "DemoScreen5",
    text: "DemoScreen5",
    screen: "DemoScreen5",
  },
  {
    id: "EmptyScreen",
    text: "EmptyScreen",
    screen: "EmptyScreen",
  },
  {
    id: "Settings",
    text: "Settings",
    screen: "SettingsScreen2",
    hideOnNavigationList: true,
  },
  {
    id: "Nested",
    text: "Nested",
    screen: "SettingsScreen2",
    subNodes: [
      {
        id: "SubDemoScreen",
        text: "SubDemoScreen",
        screen: "DemoScreen",
      },
      {
        id: "SubDemoScreen2",
        text: "SubDemoScreen2",
        screen: "DemoScreen2",
      },
    ],
  },
  {
    id: "Nested2",
    text: "Nested2",
    // screen: 'SettingsScreen2',
    subNodes: [
      {
        id: "SubDemoScreen3",
        text: "SubDemoScreen3",
        screen: "DemoScreen3",
      },
      {
        id: "SubDemoScreen4",
        text: "SubDemoScreen4",
        screen: "DemoScreen4",
      },
    ],
  },
];

export default () => {
  const appContext = useAppContext();
  const userContext = useUserContext();

  const initScreen = useMemo(() => CMSScreens, []);

  useEffect(() => {
    if (appContext.cache.screenMode == "CMS") {
      appContext.setMenuTree(CMSScreens);
    } else {
      appContext.setMenuTree(CRMScreens);
    }
  }, [appContext.cache.screenMode]);

  const login = useCallback(
    (
      username: string,
      password: string,
      values?: any
    ): Promise<{ displayName: string; token?: string; data?: any }> => {
      return new Promise((resolve, reject) => {
        if (username === "connection-error") {
          setTimeout(() => reject("Connection error"), 1000);
        }

        if (username === "wrong-password") {
          setTimeout(() => reject("Wrong username or password"), 1000);
        }

        setTimeout(
          () =>
            resolve({
              displayName: "MockUser",
              token: "MockToken",
              data: {
                name: "MockName",
                surname: "MockSurname",
              },
            }),
          1500
        );
      });
    },
    []
  );

  const getMenuTree = useCallback((): Promise<IMenuTreeItem[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(initScreen);
      }, 1000);
    });
  }, []);

  return {
    login,
    getMenuTree,
  };
};
