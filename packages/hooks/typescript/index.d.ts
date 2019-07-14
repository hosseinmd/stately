import { store } from "@stately/core";

// Type definitions for @stately/hooks

declare module '@stately/hooks' {

  export function createHooks<S, A>(store: store<S, A>): (sensitiveStateKeys: Array<string>, listener: Function) => [S, A]

}
