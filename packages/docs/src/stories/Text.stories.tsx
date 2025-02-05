import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@gibbon-design/react'

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illo, voluptatem ducimus voluptate tempora eum numquam obcaecati pariatur aperiam autem veniam nobis dolore voluptates dolor. Minima architecto temporibus assumenda reprehenderit!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio',
      }
    },
  },
}
export default meta

type Story = StoryObj<typeof Text>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'Strong text',
  }
}