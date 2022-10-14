import { Meta, StoryObj } from '@storybook/react'
import { TextArea, TextAreaProps} from './text-area';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Type our message here'
  }
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}

