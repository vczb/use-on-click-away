# useOnClickAway

I'ts a React custom hook that catches clicks outside of the element it is applied to.

## Installation

use-on-click-away is available as an [npm package](https://www.npmjs.com/package/use-on-click-away).

To install it, run:

```bash
  //with npm
  npm install use-on-click-away

  //with yarn
  yarn add use-on-click-away
```

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

## What is inside?

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Available commands

- `build`: build the files in the `lib` directory
- `storybook`: run the storybook at the address `localhost:6006`
- `prettier:check`: check formatting on all `src` directory
- `prettier:format`: formats all `src` directory

## Project structure

```
/lib
/src
├── index.ts
/stories
└── index.ts
```

## Contributing

You can contribute by opening an or sending a pull request.
## License

This project is licensed under the [MIT](./LICENSE) License.
