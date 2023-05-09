//#region imports
import React from "react";
import { useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import {
  IMenuTreeItem,
  MenuTreeUtil,
  AppContext,
  WAppBar,
  WDrawer,
  WScrollBar,
  WTheme,
  useAppContext,
} from "../../../";
// @ts-ignore
import classNames from "classnames";
import { Horizontal, WindowWidthType } from "horizontal";

import { useNavigate, useLocation, Routes, Route } from "react-router";
import NavList from "./nav-list";
import { FC, useState, useCallback, useEffect, useMemo } from "react";
import { useConfiguration } from "../../../store";
import { Box } from "@mui/material";
import ToolBar from "./tool-bar";

//#endregion

export interface WMainPageProps {
  classes: any;
  location: any;
  match: any;
  history?: any;
  appContext: AppContext;
  theme?: WTheme;
  enqueueSnackbar?: (message: string, options: object) => void;
}

export interface DispatchProps {
  setMenuTree: (menuTree: IMenuTreeItem[]) => void;
  closeScreen: (menuTreeItem: IMenuTreeItem) => void;
  openScreen: (menuTreeItem: IMenuTreeItem) => void;
}

const screenData = Horizontal.getData();
const drawerWidth =
  screenData.widthType === WindowWidthType.XS ? screenData.width : 240;
const useStyles = makeStyles((theme: any) => ({
  root: {
    height: "100vh",
    zIndex: theme.zIndex.drawer + 1 + " !important",
    overflow: "hidden",
  },
  flex: {
    flex: 1,
    display: "inline",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1 + " !important",
  },
  drawerPaper: {
    width: drawerWidth,
    height: "100%",
  },
  tabLabelContainer: {
    padding: "0px !important",
    paddingLeft: "5px !important",
    textTransform: "none !important" as any,
    wordBreak: "break-word",
    color: "white !important",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 0, // theme.spacing.unit * 3
    minWidth: 0, // So the Typography noWrap works
    display: "flex",
    flexDirection: "column",
    transition: "all ease 250ms",
    height: "inherit",
  },
  "content-left": {
    marginLeft: 0,
  },
  "content-right": {
    marginRight: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  "contentShift-left": {
    marginLeft: drawerWidth,
  },
  "contentShift-right": {
    marginRight: 0,
  },
  whiteText: {
    color: "#FFFFFFFF",
  },
  toolbar: {
    // ...theme.mixins.toolbar,
    height: 48,
    maxHeight: 48,
    "@media only screen and (max-width: 400px)": {
      paddingLeft: 0,
    },
  },
}));

const WMainPage: FC = () => {
  const classes = useStyles();
  const theme = useTheme<WTheme>();
  const appContext = useAppContext();
  const configuration = useConfiguration();
  const rightContextItems = configuration.useRightContextItems
    ? configuration.useRightContextItems()
    : [];
  const authService = configuration.useAuthService();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(
    Horizontal.getType() == WindowWidthType.LG
  );
  const topHeight = 48;
  const getScreenUrl = useCallback(
    (screen: IMenuTreeItem) => "/" + screen.screen,
    []
  );


  const routes = useMemo(() => {
    const result: IMenuTreeItem[] = [];
    MenuTreeUtil.menuTreeForEach(appContext.menuTree, (item) => {
      if (item.screen) {
        result.push(item);
      }

      return false;
    });

    return result;
  }, [appContext.menuTree]);

  const onMenuItemClicked = useCallback(
    (screen: IMenuTreeItem) => {
      if (Horizontal.getType() !== WindowWidthType.LG) {
        setDrawerOpen(false);
      }

      appContext.openScreen(screen);
    },
    [appContext.openScreen]
  );

  const loadMenuTree = useCallback(async () => {
    try {
      const menuTree = await authService.getMenuTree();
      appContext.setMenuTree(menuTree);
    } catch (e) {
      console.log("hata", e);
    }
  }, [appContext.setMenuTree]);

  useEffect(() => {
    loadMenuTree();
  }, [loadMenuTree, authService.getMenuTree]);

  return (
    <div className={classes.root + " main-page"}>
      <WAppBar
        id="main-app-bar"
        position="fixed"
        className={classes.appBar}
        elevation={theme.designDetails?.defaultElevation}
      >
        <ToolBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
      </WAppBar>
      <WDrawer
        variant="persistent"
        open={drawerOpen}
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
        PaperProps={{
          // @ts-ignore
          style: {
            // @ts-ignore
            border: "none",
            ...theme.designDetails?.drawerDesign?.paper,
          },
          elevation: theme.designDetails?.defaultElevation || 0,
        }}
      >
        <div style={{ minHeight: topHeight }} />
        <div
          style={{ height: `calc(100% - ${topHeight}px)`, overflow: "none" }}
        >
          <WScrollBar>
            <NavList onItemClicked={onMenuItemClicked} />
          </WScrollBar>
          <div
            style={{
              display: "table",
              position: "absolute",
              bottom: 0,
              height: 25,
              width: "100%",
            }}
          >
            <div
              style={{
                display: "table-cell",
                verticalAlign: "middle",
                textAlign: "center",
              }}
            >
              <span style={{ color: "#9c9999", fontSize: 10 }}>
                Developed based on{" "}
                <a
                  style={{
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "#888",
                  }}
                  href="http://wface.digiturk.io"
                  target="_blank"
                >
                  WFace
                </a>
              </span>
            </div>
          </div>
        </div>
      </WDrawer>

      <Box
        className={classNames(classes.content, classes[`content-left`], {
          [classes.contentShift]: drawerOpen,
          [classes[`contentShift-left`]]: drawerOpen,
        })}
        component="main"
        sx={theme.designDetails?.mainSx}
      >
        <div style={{ minHeight: topHeight }} />
        <WScrollBar>
          <Box
            style={{
              minHeight: `calc(100vh - ${topHeight}px - 16px)`,
            }}
            sx={theme.designDetails?.pageSx}
          >
            <Routes>
              {routes.map((item) => (
                <Route
                  key={item.id}
                  path={item.id}
                  // @ts-ignore
                  element={
                    // @ts-ignore
                    <configuration.components.ScreenWrapper
                      key={"screen-" + item.id}
                      menuTreeItem={item}
                    />
                  }
                />
              ))}
              {/* @ts-ignore */}
              <Route path="*" element={<configuration.components.NoPage />} />
            </Routes>
          </Box>
        </WScrollBar>
      </Box>
    </div>
  );
};

export default WMainPage;
