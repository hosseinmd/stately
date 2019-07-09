import { createStore } from "../src";

const store = createStore(
  { count: 0 },
  {
    increment(store) {
      store.setState({ count: store.state.count + 1 });
    },
    decrement(store) {
      store.setState({ count: store.state.count - 1 });
    },
  },
  () => {},
);

function TestComponent() {
  console.log(store.state.count);
}

test("should increment counter", () => {
  const testListenerRemove = store.addListener(TestComponent, ["count"]).remove;
  store.actions.increment();
  expect(store.state.count).toBe(1);
  testListenerRemove();
  store.actions.decrement();
  expect(store.state.count).toBe(0);
});
