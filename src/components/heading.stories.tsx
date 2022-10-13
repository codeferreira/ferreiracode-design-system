import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum.',
    size: '2xl',
  },
  argTypes: {
    size: {
      options: ['xl', '2xl', '3xl'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}


export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'xl'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: '3xl'
  }
}

export const Custom: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Testing</h1>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
}