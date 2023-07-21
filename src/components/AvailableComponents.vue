<script setup lang="ts">
import {ref} from 'vue'
import Vuedraggable from "vuedraggable";
import {useLayoutStore} from "../stores/layout.ts";

const store = useLayoutStore();
store.freeComponents = await store.pullFreeComponents()

let dragging = ref(false);
</script>

<template>
  <section class="available-components">
    <Vuedraggable
      :list="store.freeComponents"
      item-key="components"
      class="draggable-available-components"
      ghost-class="ghost"
      @start="dragging = true"
      @end="dragging = false"
      group="cell"
    >
      <template #item="{ element }">
        <div class="lc-component" v-html="element.preview || element.label"></div>
      </template>
    </Vuedraggable>
  </section>
</template>


<style scoped lang="scss">
.lc-component {
  border: 1px solid red;
  padding: 10px;
}
</style>
