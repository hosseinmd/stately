import React from "react";

function useStately(sensitiveStateKeys, listener) {
  if (typeof listener !== "function") listener = React.useState()[1];

  React.useEffect(() => {
    return this.addListener(listener, sensitiveStateKeys).remove;
  }, []);

  return [this.state, this.actions];
}

export function createHooks(store) {
  return useStately.bind(store);
}
