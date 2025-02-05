import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@gibbon-design/react'
import { ArrowRight } from '@phosphor-icons/react'

const meta: Meta<typeof Button> = {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      type: 'boolean',
    },
    onClick: {
      action: 'click'
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}


export const WithIcon: Story = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold'/>
      </>
    )
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
