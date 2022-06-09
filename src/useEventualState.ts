import { useRef } from 'react'

const useEventualState = <T>(initialValue: T): [T, (newValue: T) => void] => {
  const state = useRef(initialValue)

  const setNextState = (newValue: T) => {
    state.current = newValue
  }

  return [state.current, setNextState]
}

export { useEventualState }
