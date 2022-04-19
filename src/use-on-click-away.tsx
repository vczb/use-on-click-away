import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

const useOnClickAway = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  // eslint-disable-next-line no-unused-vars
  handler: (event: Event) => void
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current
      if (!el || el.contains((event?.target as Node) || null)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useOnClickAway
