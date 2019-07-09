// Type definitions for @stately/core


declare module '@stately/core' {
  interface store<S,A>  {
    state:S;
    actions: A;
    addListener: (listener:Function,sensitiveStatesKey:Array<string>)=>void;
    setState: (partialState:S)=>void;
  }
  export function createStore<S,A>(initialState:S, actions:A, initializer:(store:store<S,A>)=>void): store<S,A>
  
}
