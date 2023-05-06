import { DrawerMenuItemProps } from "../../../container/components/w-main-page/nav-list";
import { SxProps, Theme } from '@mui/material';

export interface WDesignDetails {
  defaultElevation?: number;
  drawerDesign?: {
    paper?: SxProps;
    menuItem?: DrawerMenuItemProps;
  };
  mainSx: SxProps<Theme>;
  pageSx: SxProps<Theme>;
}

