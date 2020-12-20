import { platoon } from '@platoon/system';
import { TextProps } from '../text';

export type LabelProps = TextProps;

const Label = platoon('label');

Label.displayName = 'Label';

export default Label;
