import { useRef } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { useOnClickAway } from '../src'

export default {
  title: 'useOnClickAway'
} as Meta

export const Default: Story = () => {
  const ref = useRef<HTMLDivElement>(null)

  useOnClickAway(ref, () => {
    console.log('clicked away')
  })

  return (
    <div
      ref={ref}
      style={{ width: '100px', height: '100px', background: '#222' }}
    />
  )
}
