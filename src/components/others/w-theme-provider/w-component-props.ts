import { ComponentsProps } from '@mui/material/styles';
import { MaterialTableProps } from 'material-table';

export interface WComponentsProps extends ComponentsProps {
    WTable?: MaterialTableProps<any>;
}