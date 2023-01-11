import { BaseComponentProps } from '../../base/base-component-props';

export default interface BaseFieldProps extends BaseComponentProps {
  label: string,
  name: string,
  useFastField?: boolean
}