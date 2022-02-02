// Types imports.
import type { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import type { ReactNode } from 'react';
import type { Props as TextProps } from '../Text';

export interface SelectItem {
  key: string;
  dropdownTitle?: string;
  [key: string]: any;
}

interface SelectProps {
  mode?: 'dialog' | 'dropdown';
  items?: Array<SelectItem>;
  selectedItems?: Array<SelectItem>;
  allowMultiSelect?: boolean;
  onItemsSelected?: (selectedItems?: Array<SelectItem>) => void;
}

interface ErrorProps {
  errorMessage?: string;
  textProps?: TextProps;
}

export default interface Props extends TextInputProps {
  isRequired?: boolean;
  topLabel?: ReactNode;
  errorProps?: ErrorProps;
  selectProps?: SelectProps;
}
