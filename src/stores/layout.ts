import {defineStore} from 'pinia'

export const useLayoutStore = defineStore({
    id: 'counter',
    state: () => ({
        layout: []
    }),
    // getters: {
    //     doubleCount: (state) => state.counter * 2
    // },
    // actions: {
    //     increment() {
    //         this.counter++
    //     }
    // }
})
