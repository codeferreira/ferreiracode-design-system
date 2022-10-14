import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Get in touch',
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}
export const Outlined: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline'
  }
}
export const Naked: StoryObj<ButtonProps> = {
  args: {
    variant: 'naked'
  }
}
