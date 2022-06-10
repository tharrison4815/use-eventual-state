# use-eventual-state

A hook which allows you to set state in React without triggering a re-render

## Purpose

Sometimes you may want to set state to be used on the next render, to compare a
previous value.

### Why not use normal state?

This will trigger a re-render

### Why not use a ref?

Well under the hood this is how `useEventualState` works, however there are two
problems with using this approach in your own components:

1. This involves writing your own code which causes a mutation. This can often
   cause bugs and can be more difficult to test. By using `useEventualState` this
   is hidden away and tested in advance so you don't have to worry about it.
2. Once you've changed the value of the ref, it will be different throughout the
   rest of the render. By using `useEventualState` it will retain the value
   throughout the current render and will only return the new value on the next
   render

# Getting Started

## Installation

To install simply run the following:

NPM:

```
npm i use-eventual-state
```

Yarn:

```
yarn add use-eventual-state
```

## Usage

```jsx
import { useEventualState } from 'use-eventual-state'

const AComponent = () => {
  const [clickCount, setClickCount] = useEventualState(0)
  const [num, setNum] = useState(0)

  return (
    <div>
      <button
        onClick={() => setClickCount(clickCount + 1)}
      >{`Lazy click count: ${clickCount}`}</button>
      <button onClick={() => setNum(num + 1)}>{`Click count: ${num}`}</button>
    </div>
  )
}
```
