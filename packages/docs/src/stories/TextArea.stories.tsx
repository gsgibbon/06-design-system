import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea } from '@gibbon-design/react'

const meta: Meta<typeof TextArea> = {
  title: 'Form/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2'}}>
          <Text size="sm" >Observations</Text>
          {Story()}
        </Box>
      )
    }
  ],
}
export default meta

type Story = StoryObj<typeof TextArea>

export const Primary: Story = {
  args: {
    placeholder: 'Add any observations',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}