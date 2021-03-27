# React Phone

Simple unstyled phone input that allows selecting countries and auto-formatting phone numbers accordingly. Typescript-first, Thoroughly Tested, Highly-customizable and Well-documented.

The component plays very well with frameworks such as [styled-components](https://styled-components.com), [emotion](https://emotion.sh) and [Material UI](https://material-ui.com).

- Automatically formats phone number based on user input
- Automatically guesses country as user types (guessing can be disabled)
- Shows/updates flag according to user selection or as user types
- Allows styles customization
- Allows component overriding (implement any component from most libraries, like material-ui)
- Allows custom flags for certain countries
- Fully localizable
- and much more...

## Getting Started

Install the component

```bash
yarn add react-phone # or `npm i react-phone`
```

Use it as you wish

```js
import { ReactPhone } from 'react-phone'
import { CustomMenu } from './Menu';
import { CustomMenuButton } from './MenuButton';
....

<ReactPhone 
    defaultCountry="gb"
    components={{ Menu: CustomMenu, MenuButton: CustomMenuButton }}
    // other props
/>
```

This will render a basic HTML input with all the functionality you need (ie: autoformatting as user types, country detection, ...etc)

## Options

```js
<ReactPhone 
    alwaysDefaultMask?: boolean
    areaCodes?: AreaCodes
    autocompleteSearch?: boolean
    autoFormat?: boolean
    components?: Record<string, React.ReactElement>
    defaultCountry?: string[]
    defaultMask?: string
    disableCountryCode?: boolean
    disableCountryGuess?: boolean
    enableAreaCodes?: boolean | string[]
    enableSearch?: boolean
    enableTerritories?: boolean
    excludeCountries?: string[]
    jumpCursorToEnd?: boolean
    localization?: Localization
    masks?: Masks
    onlyCountries?: string[]
    preferredCountries?: string[]
    prefix?: string
    priority?: Record<string, number>
    regions?: Region | Region[] | null
    searchNotFoundText?: string
    searchPlaceholderText?: string
/>
```

- **alwaysDefaultMask?: boolean**
  Allows to always use default mask
  _Default_ false

- **areaCodes?: Record<string, string[]>**
  Specifies custom area codes for country codes, example: `areaCodes={{gr: ['2694', '2647'], fr: ['369', '463'], us: ['300']}}`

- **autocompleteSearch?: boolean**
  Enables country search auto-completion
  _Default_ false

- **autoFormat?: boolean**
  Auto-formats phone numbers
  _Default_ true

- **components?: Record<string, React.ReactElement>**
  Allows customization of ReactPhone Components. Example: `components = { MenuButton: <MyCustomMenuButton {...props} />}`

- **defaultCountry?: string**
  Country to be used by default
  _Default_ "us"

- **defaultMask?: string**
  Default mask to be used when no other masks are defined in rawCountries/rawTerritories or when no other masks defined by the user using the `masks` prop
  _Default_ "... ... ... ... .."

- **disableCountryCode?: boolean**
  Disables country code to only show actual phone number
  _Default_ false

- **disableCountryGuess?: boolean**
  Disables country guessing
  _Default_ false

- **enableAreaCodes: enableAreaCodes?: boolean | string[]**
  Enables local codes for all countries or for specified Iso2 country codes ie: `enableAreaCodes={true}` or `enableAreaCodes={['us', 'ca']}`
  _Default_ false

- **enableSearch?: boolean**
  Enables country search (through an input in countries menu)
  _Default_ false

- **enableTerritories?: boolean**
  Enables dependent territories with population of ~100,000 or lower
  _Default_ false

- **excludeCountries?: string[]**
  Country codes to be excluded from the dropdown list `excludeCountries={['cu','cw','kz']}`

- **jumpCursorToEnd?: boolean**
  Jump cursor to end of the input
  _Default_ true

- **localization?: Localization**
  Specifies predefined or custom localization

- **masks?: Masks**
  Specifies custom masks for country codes, example: `masks={{fr: '(...) ..-..-..', at: '(....) ...-....'}}`

- **onlyCountries?: string[]**
  Country codes to be included, ie: `onlyCountries={['cu','cw','kz']}`

- **preferredCountries?: string[]**
  Country codes to be at the top of the dropdown list `preferredCountries={['cu','cw','kz']}`

- **prefix?: string**
  Specifies the country code prefix
  _Default_ "+"

- **priority?: Priorities**
  Specifies custom priority for country codes, example: `priority={{ca: 0, us: 1, kz: 0, ru: 1}}` \_/

- **regions?: Region | Region[] | null**
  Used to display countries only from specified regions
  _Default_ null

- **searchNotFoundText?: string**
  Text that should be displayed when no search results are found
  _Default_ "No entries to show"

- **searchPlaceholderText?: string**
  Placeholder text of the search input
  _Default_ "search"

## Contributing

This project is built with TSDX. This setup is meant for developing React components/libraries which are then published to NPM.

> If you’re new to TypeScript and React, checkout [this handy cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/)

### Commands

TSDX scaffolds the library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
yarn start # or `npm start`
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

#### Storybook

Run inside another terminal:

```bash
yarn storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

#### Example

Then run the example inside another:

```bash
cd example
yarn # or `npm i` to install dependencies
yarn start # or `npm start`
```

The default example imports and live reloads whatever is in `/dist`, so if you are seeing an out of date component, make sure TSDX is running in watch mode like we recommend above. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

#### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

#### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

#### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

#### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`.

### Continuous Integration

#### GitHub Actions

Current actions are:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of the library on every pull request using [size-limit](https://github.com/ai/size-limit)

### Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.
