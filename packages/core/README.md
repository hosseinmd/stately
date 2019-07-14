## stately

Easy state management for javascript.
it's useful for global state management and complex local state

[![NPM Version](https://img.shields.io/npm/v/@stately/core.svg?style=flat)](https://www.npmjs.com/package/@stately/core) [![download](https://img.shields.io/npm/dm/@stately/core.svg)](https://www.npmjs.com/package/@stately/core)


## TOC

* [install](#install)
* [use](#use)
* [property](#property)

## install

```npm
npm i @stately/core --save
```
```yarn
yarn add @stately/core
```
---

## use

```javascript
import { createStore } from "@stately/core";

const initialState = {
  counter: 0
};

const actions = {
  addToCounter: (store, amount) => {
    const newCounterValue = store.state.counter + amount;
    store.setState({ counter: newCounterValue });
  }
};

const store = createStore(initialState, actions);

```

---


## property

| Method                                                            | Return Type         | params                  | 
| ----------------------------------------------------------------- | ------------------- | :--:                    | 
| [store.setState()](#setState())                                   | `void`              |  partialState:`object`    | 
| [store.addListener()](#addListener())                              | `{ remove():void }`|  listener: `Function`, sensitiveStatesKey: `Array<string> ` | 
| [store.actions()](#actions())                                     | `object`              |                    `any`     |
| [store.state](#state)                                           | `string`            |                         |

---

## setState()

Set partial state

**Examples**

```js
store.setState({counter: store.state.counter+1})
```

---

## addListener()

Add an event listener.
Listener run when a state did update
**Examples**

below event run just counter did update
```js
function logCounter(){
 console.log(store.state.counter)
}
store.addListener(logCounter,["counter"])
```

below event run when any change in state did invoke
```js
function logState(){
 console.log(store.state)
}
store.addListener(logState,[])
```
---




## actions()

gives initialed actions 

**Notes**
> Store is bound in first params.

**Examples**

```js
store.actions.addToCounter(3)
```

## state 

gives current state

**Examples**

```js
console.log(store.state.counter)
```