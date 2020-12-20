import { platoon } from '@platoon/system';
import { SystemProps } from '../../primitives';

export type ParagraphProps = SystemProps;

const Paragraph = platoon('p');

Paragraph.displayName = 'Paragraph';

Paragraph.defaultProps = { textStyle: 'body' };

export default Paragraph;
