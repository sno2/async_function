/**
 * credits: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
 * @internal
 */
const _AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

/** Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction */
export type AsyncFunctionType = typeof _AsyncFunction;

/** The type for the `AsyncFunction` class. */
export const AsyncFunction: AsyncFunctionType = _AsyncFunction;
