import { ComponentProps, forwardRef, ComponentRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends Omit<ComponentProps<typeof Input>, "size"> {
  prefix?: string
  size?: 'sm' | 'md'
}

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(
  ({ prefix, size = 'md', ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  }
)

TextInput.displayName = "TextInput"