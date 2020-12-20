import { platoon } from '@platoon/system';
import { ComponentPropsWithRef } from 'react';
import { SystemProps } from '../box';

export type FlexProps = SystemProps & ComponentPropsWithRef<'div'>;

const Flex = platoon('div', { display: 'flex' });

Flex.displayName = 'Flex';

export default Flex;
