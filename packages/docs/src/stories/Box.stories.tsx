import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text } from '@gibbon-design/react'

const meta: Meta<typeof Box> = {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text> Testando o elemento Box </Text>
  },
  argTypes: {
    children: { 
      control: {
        disable: true,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Box>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: <Text as="strong">Strong text</Text>
  }
}