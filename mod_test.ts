import { assertStrictEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";
import { AsyncFunction } from "./mod.ts";
import type { AsyncFunctionType } from "./mod.ts";

Deno.test("AsyncFunction with just function body", async () => {
  const myAsyncFunction: AsyncFunctionType = new AsyncFunction("return 1123;");
  assertStrictEquals(await myAsyncFunction(), 1123);
});

Deno.test("AsyncFunction with one argument", async () => {
  const myAsyncFunction: AsyncFunctionType = new AsyncFunction(
    "a",
    "return a + 5;"
  );
  assertStrictEquals(await myAsyncFunction(23), 28);
});

Deno.test("AsyncFunction with multiple arguments", async () => {
  const myAsyncFunction: AsyncFunctionType = new AsyncFunction(
    "a",
    "b",
    "c",
    "return a + b + c;"
  );
  assertStrictEquals(await myAsyncFunction(1, 2, 3), 6);
});
