import { useState, useEffect } from "react";

function useStately(sensitiveStateKeys, listener) {
  if (typeof listener !== "function") listener = useState()[1];

  useEffect(() => {
    return this.addListener(listener, sensitiveStateKeys).remove;
  }, []);

  return [this.state, this.actions];
}

export function createHooks(store) {
  return useStately.bind(store);
}
