import { create } from "zustand";

interface ICounterStore{
    count:number,
    title: String
}

export const useCounterStore = create(() => ({
    count:5,
    title: "Contador: 11"
}))    