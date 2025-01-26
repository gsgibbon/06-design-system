import '@radix-ui/themes/styles.css'
import { User } from '@phosphor-icons/react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { ComponentProps } from 'react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage
        {...props}
        fallback={
          <AvatarFallback>
            <User />
          </AvatarFallback>
        }
      />
    </AvatarContainer>
  )
}
