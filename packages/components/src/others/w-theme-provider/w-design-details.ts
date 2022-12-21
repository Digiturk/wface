import { DrawerMenuItemProps } from "../../../../container/src/components/w-main-page/nav-list";
import { SxProps } from '@mui/material';

export interface WDesignDetails {
  defaultElevation?: number;
  pagePadding?: number | string;
  drawerDesign?: {
    paper?: SxProps;
    menuItem?: DrawerMenuItemProps;
  };
}
