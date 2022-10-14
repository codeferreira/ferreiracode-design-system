import { Meta, StoryObj } from '@storybook/react'
import { Download } from 'phosphor-react';
import { Button, ButtonRootProps } from './button';

export default {
  title: 'Components/Button',
  component: Button.Root,
  args: {
    variant: 'default',
    children: (
      [
        'Get in touch'
      ]
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    variant: {
      options: ['default', 'outline', 'naked'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<ButtonRootProps>

export const Default: StoryObj<ButtonRootProps> = {}

export const Outlined: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'outline'
  }
}

export const Naked: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'naked'
  }
}

export const WithIconLeft: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'naked',
    children: [
      <Button.Icon>
        <Download />
      </Button.Icon>,
      'Download'
    ]
  }
}

export const WithIconRight: StoryObj<ButtonRootProps> = {
  args: {
    variant: 'naked',
    children: [
      'Download',
      <Button.Icon>
        <Download />
      </Button.Icon>
    ]
  }
}
