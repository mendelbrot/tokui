## navigation

tutorial starting point:
https://dev.to/nanythery/add-conditional-style-to-link-with-active-route-with-nextjs-and-tailwind-14ha

updated info on path:
https://nextjs.org/docs/app/api-reference/functions/use-pathname

**the useRouter hook from next/navigation**
https://nextjs.org/docs/app/api-reference/functions/use-router

**useParams is the one for dynamic routes**
https://nextjs.org/docs/app/api-reference/functions/use-params

## nextjs docs

https://nextjs.org/docs

**terminology**
https://nextjs.org/docs/app/building-your-application/routing

- tree
- subtree
- root
- leaf
- domain
- url segment
- url path
- slug

## types

a tutorial about types in nextjs
https://blog.logrocket.com/using-next-js-with-typescript/

filesystem types npm package
https://www.npmjs.com/package/@types/filesystem

`const [filehandle] = await window.showOpenFilePicker({ multiple: false })`
gives this ts error:
`Property 'showOpenFilePicker' does not exist on type 'Window & typeof globalThis'.ts(2339)`

showOpenFilePicker docs:
https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker

this answer showed the correct package to install for the types:
https://stackoverflow.com/questions/69803693/svelte-how-to-use-native-web-apis
https://www.npmjs.com/package/@types/wicg-file-system-access

they all come from this repo called Definitely Typed:
https://github.com/DefinitelyTyped/DefinitelyTyped

## formatting with prettier

formatting all:

```
npx prettier . --write
```

setup:

```
npm i prettier eslint-config-prettier
```

`.prettierrc`

```
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

`.eslintrc.json`

```
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

As expected the deployement broke after switching framework.  I changed the framework preset in the project settings and now im going to merge to main to see if it works again.

## inline-block

magic to prevent item from expanding to parent width:
https://tailwindcss.com/docs/display#block-and-inline
https://stackoverflow.com/questions/18134700/css-prevent-div-width-from-expanding-to-available-width