import { useEventualState } from '../useEventualState'
import { renderHook } from '@testing-library/react'

it('should initially return the intial value', () => {
  const { result } = renderHook(useEventualState, {
    initialProps: 'starting value',
  })

  const [stateValue] = result.current

  expect(stateValue).toBe('starting value')
})

it('should still return inital state after update has been called if component has not re-rendered', () => {
  const { result } = renderHook(useEventualState, {
    initialProps: 'starting value',
  })

  const [, updateStateValue] = result.current

  updateStateValue('a new value')

  const [stateValue] = result.current

  expect(stateValue).toBe('starting value')
})

it('should return new state after update has been called and component is re-rendered', () => {
  const { result, rerender } = renderHook(useEventualState, {
    initialProps: 'starting value',
  })

  const [, updateStateValue] = result.current

  updateStateValue('a new value')

  rerender()

  const [stateValue] = result.current

  expect(stateValue).toBe('a new value')
})
