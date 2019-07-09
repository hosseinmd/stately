// Type definitions for @stately/core


declare module '@stately/core' {
  
  type store<S={},A={}> = {
    state: S;
    actions: A;
    addListener: (listener:Function,sensitiveStatesKey:Array<string>)=>void;
    setState: (partialState:S)=>void;
  };

  type initialize<STORE>=(store:STORE)=>void

  export function createStore<S,A>(initialState:object, actions:object, initializer:initialize<store<S,A>>): store<S,A>
  
}
