import {defineStore} from 'pinia'
import Mock from "@/Mock";
import type Layout from "@/models/Layout";
import type Row from "@/models/Row";
import type Component from "@/models/Component";

export const useLayoutStore = defineStore({
    id: 'counter',
    state: () => ({
        // Full layout structure (Layout -> rows -> cells -> allocated components)
        layout: {} as Layout,
        // Components not allocated into the layout.
        freeComponents: [],
    }),
    // getters: {
    //     doubleCount: (state) => state.counter * 2
    // },
    actions: {
        /**
         * Get people list.
         */
        async pullLayout(): Promise<Layout> {
            const api = new Mock();
            return await api.get<Layout>(Mock.endpoints.layout);
        },

        async pullFreeComponents(): Promise<Component[]> {
            const api = new Mock();
            return await api.get<Component[]>(Mock.endpoints.components);
        },

        addRow(position: number, rowTpl: Row) {
            this.layout.rows.splice(position, 0, rowTpl);
        }
    }
})
