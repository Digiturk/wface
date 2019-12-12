import { ComponentsProps } from "@material-ui/core/styles/props";
import { MaterialTableProps } from 'material-table';

export interface WComponentsProps extends ComponentsProps {
    WTable?: MaterialTableProps<any>;
}