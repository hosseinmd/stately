"use strict";

import { setState } from "./lib/setState";
import { associateActions } from "./lib/Actions";
import { addListener } from "./lib/Listener";

export const createStore = (initialState, actions, initializer) => {
  const store = { state: initialState, __listeners: {} };
  store.setState = setState.bind(store);
  store.addListener = addListener.bind(store);
  store.actions = associateActions(store, actions);
  typeof initializer == "function" && initializer(store);
  return store;
};
