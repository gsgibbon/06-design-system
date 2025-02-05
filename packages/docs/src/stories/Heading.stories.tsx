import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from '@gibbon-design/react'

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'], 
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      }
    },
  },
}
export default meta

type Story = StoryObj<typeof Heading>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: <h1>H1 Heading</h1>,
  },
  parameters: {
    docs: {
      description: {
        story: 'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.'
      }
    }
  }
}