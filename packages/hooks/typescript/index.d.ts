// Type definitions for @stately/hooks

declare module '@stately/hooks' {
  type store<S={},A={}> = {
    state: S;
    actions: A;
    addListener: (listener:Function,sensitiveStatesKey:Array<string>)=>void;
    setState: (partialState:S)=>void;
  };

  export function generateHooks<STORE>(store:store):(sensitiveStateKeys:Array<string>,listener:Function)=>[Exclude<keyof STORE, "state">,Exclude<keyof STORE, "actions">] 
  
}
