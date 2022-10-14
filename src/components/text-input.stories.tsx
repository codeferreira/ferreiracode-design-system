import { Meta, StoryObj } from '@storybook/react'
import { TextInput, InputRootProps } from './text-input';
import { Envelope } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: ([
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type our username" />
    ])
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  }
} as Meta<InputRootProps>

export const Default: StoryObj<InputRootProps> = {}
export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type our username" />
  }
}

