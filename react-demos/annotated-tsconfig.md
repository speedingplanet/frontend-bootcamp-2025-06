# Annotated tsconfig.json

Details from the TypeScript [TSConfig Reference](https://www.typescriptlang.org/tsconfig/). There's a lot there!

The current `tsconfig.json` file for this very project.

```json
{
	"compilerOptions": {
		"target": "ESNext",
		"useDefineForClassFields": true,
		"lib": ["DOM", "DOM.Iterable", "ESNext"],
		"allowJs": false,
		"skipLibCheck": true,
		"esModuleInterop": false,
		"allowSyntheticDefaultImports": true,
		"strict": true,
		"forceConsistentCasingInFileNames": true,
		"module": "ESNext",
		"moduleResolution": "Node",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"noEmit": true,
		"jsx": "react-jsx"
	},
	"include": ["src"],
	"references": [{ "path": "./tsconfig.node.json" }]
}
```

## Line by line

```json
"compilerOptions": { /* many options */ }
```

These options make up the bulk of TypeScript’s configuration and it covers how the language should work.

```json
"target": "ESNext",
```

Output target for the TS compiler. Older versions of ECMAScript would provoke some code being "downleveled" to match the target. Also changes the `lib` value according to [this table](https://www.typescriptlang.org/tsconfig/#lib).

Ultimately [ignored](https://vitejs.dev/guide/features#target) by Vite.

```json
"lib": ["DOM", "DOM.Iterable", "ESNext"],
```

Which type definitions are included with the compiler. Some definitions are included by default, some according to the value of `target`.

```json
"useDefineForClassFields": true,
```

TypeScript had class fields before ECMAScript, this exists to bring the two in line with each other.

```json
"allowJs": false,
```

Allow JavaScript files to be imported into the project.

```json
"skipLibCheck": true,
```

Skip type checking of declaration files in favor of checking only the code specifically used in the application.

```json
"esModuleInterop": false,
```

With a value of false, treats ECMAScript modules and CommonJS, AMD, and UMD modules similarly. This could [cause issues](https://www.typescriptlang.org/tsconfig/#esModuleInterop).

```json
"allowSyntheticDefaultImports": true,
```

Effectively aliases `import * as Foo` to `import Foo` when the library imported from **does not** explicitly set a default export.

```json
"strict": true,
```

Enables a host of stricter checks on your code detailed [here](https://www.typescriptlang.org/tsconfig/#strict). You can turns these off one by one if you wish.

```json
"forceConsistentCasingInFileNames": true,
```

Forces imports to act as if they're on a case-sensitive file system even when they're not. Prevents `import {x} from './foo.js'` working with a file called `Foo.js`.

```json
"module": "ESNext",
```

The default module style for the application. This can be [complicated](https://www.typescriptlang.org/tsconfig/#module).

```json
"moduleResolution": "Node",
```

Specify the module resolution strategy. Seems like it should be `nodenext`...?

```json
"resolveJsonModule": true,
```

Allows importing JSON files as if they were modules.

```json
"isolatedModules": true,
```

Raises an error if you write code that the TypeScript compiler understands, but other compilers (Babel's for instance) might not. Also some [other effects](https://www.typescriptlang.org/tsconfig/#isolatedModules)

```json
"noEmit": true,
```

Do not emit compiler output like JavaScript. This is [handled by Vite](https://vitejs.dev/guide/features#typescript) instead.

```json
"jsx": "react-jsx"
```

How should the compiler emit JSX? In this case, emit `.js` files with the JSX library imported as `_jsx`

```json
"include": ["src"],
```

What files should be compiled?

```json
"references": [{ "path": "./tsconfig.node.json" }]
```

Allows breaking up `tsconfig.json` into separate files in separate situations. See [here](https://www.typescriptlang.org/docs/handbook/project-references.html) for details. Look at `tsconfig.node.json` for an example.
