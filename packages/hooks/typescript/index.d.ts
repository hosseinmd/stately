// Type definitions for @stately/hooks

declare module '@stately/hooks' {
  interface store<S,A>  {
    state:S;
    actions: A;
    addListener: (listener:Function,sensitiveStatesKey:Array<string>)=>void;
    setState: (partialState:S)=>void;
  }

  export function createHooks<S,A>(store:store<S,A>):(sensitiveStateKeys:Array<string>,listener:Function)=>[S,A] 
  
}
