import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from "@gibbon-design/react"

const meta: Meta<typeof Avatar> = {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/gsgibbon.png',
    alt: 'Guilherme'
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {}

export const WithFallback: Story = {
  args: {
    src: undefined,
  }
}