import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import useCounterStore from "./store";

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}
// set is function for updating the state of the store
// arrow function should return an object which is the initial state of the store
const useCounterStore = create<CounterStore>()((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ counter: 0 })),
}));

if (process.env.NODE_ENV === "development") {
  // the first parameter is the name that we give to our store and this will appear in react devtools
  // the second argument is our custom hook that is returned here
  mountStoreDevtool("Counter Store", useCounterStore);
}
export default useCounterStore;
