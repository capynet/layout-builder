import {defineStore} from 'pinia'

export const useLayoutStore = defineStore({
    id: 'counter',
    state: () => ({
        // Full layout structure (Layout -> rows -> cells -> allocated components)
        layout: [],
        // Components not allocated into the layout.
        freeComponents: [],
    }),
    // getters: {
    //     doubleCount: (state) => state.counter * 2
    // },
    // actions: {
    //     addRow(state, { position, rowTpl }) {
    //         state.layout.rows.splice(position, 0, rowTpl);
    //     }
    // }
})
