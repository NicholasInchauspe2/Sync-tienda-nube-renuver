## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Code Fromat

#### Eslint and Prettier

This project uses Eslint and Prettier to obtain a standardization of the code.

It is recommended to have the vscode extensions installed for these libraries, in this way you can view the errors and correct them.

#### Git Hooks Husky and Lint-staged

We use Husky and Lint-Staged to configure scripts to run at different times, such as before commit, before push etc.

This allows us, for example, to format code, run tests, etc.

- pre-commit : it was configured to format modified code with Prettier ensuring standardization.

## Technology

- We'll use SSR for the pages that need to fetch data from database
- We'll use SSG for the pages that can be static like frequently question, blog post and data about the business
- Axios to fetch data
- If we can we should use lazy loading to show the images
- Redux Toolkit for states management
- We use [Next SEO](https://github.com/garmeeh/next-seo) to managing SEO

## Styles

- SCSS Modules
- Mobile First
- BEM methodology
  - [Naming Convention](https://en.bem.info/methodology/naming-convention/)
    block-name\_\_element-name_modifier-name_modifier-value
    - [Block](https://en.bem.info/methodology/quick-start/#block)
    - [Element](https://en.bem.info/methodology/quick-start/#element)
    - [Modifier](https://en.bem.info/methodology/quick-start/#modifier)
- We use \*vw\*\* measure to guarantee responsiveness, for this we have the get-vw function that will transform px to vw.

# Architecture

#### Estructura de carpeta para los componentes

- Button.tsx where the component is defined.
- index.tsx export the component and then import it as follows:

```
import Button from '@/{folder}/Button'
```

```
├── Button
│   ├── components
│   ├── Button.tsx
│   ├── index.tsx
│   └── button.module.scss

```

---

## Commons

Common components are created once and reused many times in different contexts or in another components.

- Button

## Components

- Layout

## Constants

## Pages

## Services

## Styes

- SCSS variables, mixin and fucntions in `src/styles`

## Types

- common interfaces in `src/types`
- specific interfaces in the component folder. Must be exported.

## Utils

- common functions in `src/utils`
