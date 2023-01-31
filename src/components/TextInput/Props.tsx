// Types imports.
import type { Props as TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import type { Props as TextProps } from '../Text';
import type SelectItem from '../../types/SelectItem';
import type {
  MD2Theme,
  MD3Theme,
} from 'react-native-paper/lib/typescript/types';

export interface SelectProps {
  mode?: 'dialog' | 'dropdown';
  items?: SelectItem[];
  selectedItems?: SelectItem[];
  allowMultiSelect?: boolean;
  onItemsSelected?: (selectedItems?: SelectItem[]) => void;
  searchLabel?: string;
  noDataMessage?: string;
  closeText?: string;
  trimLength?: number;
}

export interface ErrorProps {
  errorMessage?: string;
  textProps?: Omit<TextProps, 'children'>;
}

export interface TopLabelProps {
  label?: string;
  textProps?: Omit<TextProps, 'children'>;
}

export default interface Props extends Omit<TextInputProps, 'theme'> {
  style?: TextInputProps['style'] & { [key: string]: any };
  isRequired?: boolean;
  topLabelProps?: TopLabelProps;
  errorProps?: ErrorProps;
  selectProps?: SelectProps;
  ref?: any;
  positiveNumbersOnly?: boolean;
}

export interface PropsWithTheme extends Props {
  theme: MD2Theme | MD3Theme;
}
