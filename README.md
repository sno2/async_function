# async_function

> A simple module for accessing the `AsyncFunction` class and type.

Despite the `Function` class being in the default global scope, the `AsyncFunction` class is not. A workaround to get this type can be achieved by just using the following code:

```ts
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
// credits: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
```

Obviously, this is a little bit of nasty code that everyone may not want to have to include every time you need the `AsyncFunction` class. Therefore, I have created this Deno module to give you the `AsyncFunction` class just by importing it from the Deno third-party modules registry. Here is how you can get it working:

```ts
import { AsyncFunction } from "http://deno.land/x/async_function/mod.ts";
```

There you go! You can now freely use the `AsyncFunction` class and all of it's glory! Of course, if we did want to add a type for `AsyncFunction` if we have an undeclared variable or just want to be explicit, we can just do `typeof AsyncFunction` to get its type. However, if you really want to have the `AsyncFunction` type imported into your code from yours truly, you can use this import statement:

```ts
import type { AsyncFunctionType } from "http://deno.land/x/async_function/mod.ts";
```

Now, we have the `AsyncFunction` class and its type for us to use. Please refer to [the MDN docs page on `AsyncFunction`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction) for more info.

## License

By contributing your code, you agree to license your contribution under the [MIT License](./LICENSE).
