import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCounterState = create(persist((set) => ({
  count: 10,
  increaseCount: () => {
    //set(function) => function (state) {return {value: updated value}}


    // set((state) => ({ count: state.count + 1 }));

    function increment(state){
        return {
            count: state.count + 1,
        };
    }
    set(increment);
},
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
}),
{
    name: "count",
},
),
);