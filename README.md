# useOnClickAway

It's a `6kb` React custom hook that catches clicks outside of the element it is applied to.

## Installation

use-on-click-away is available as an [npm package](https://www.npmjs.com/package/use-on-click-away).

To install it, run:

```bash
  //with npm
  npm install use-on-click-away

  //with yarn
  yarn add use-on-click-away
```

## Example

[`use-on-click-away-demo`](https://codesandbox.io/s/use-on-click-away-demo-lk4xkk?file=/src/App.tsx)

## Usage

```js
const MyComponent = () => {
  const ref = useRef()

  useOnClickAway(ref, () => {
    console.log('clicked away')
  })

  return (
    <div ref={ref}>
      ...
    </div>
  )

}

export default MyComponent
```

# Contributing

You can contribute by opening an issue or sending a pull request.

# License

This project is licensed under the [MIT](./LICENSE) License.
