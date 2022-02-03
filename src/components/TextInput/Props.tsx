// Types imports.
import type { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import type { Props as TextProps } from '../Text';
import type SelectItem from '../../types/SelectItem';

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

interface TopLabelProps {
  label?: string;
  textProps?: TextProps;
}

export default interface Props extends TextInputProps {
  style?: TextInputProps['style'] & { [key: string]: any };
  isRequired?: boolean;
  topLabelProps?: TopLabelProps;
  errorProps?: ErrorProps;
  selectProps?: SelectProps;
}
