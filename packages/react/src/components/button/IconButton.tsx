import { platoon } from '@platoon/system';
import Button, { ButtonProps } from './Button';

export type IconButtonProps = ButtonProps;

const IconButton = platoon(Button, {});

IconButton.displayName = 'IconButton';

IconButton.defaultProps = {
    icon: 'heart',
};

export default IconButton;
