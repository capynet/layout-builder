<script setup lang="ts">
import {ref} from 'vue'
import Vuedraggable from "vuedraggable";
import DOMField from "./DOMField.vue";
import {useLayoutStore} from "../stores/layout";

const store = useLayoutStore()
let dragging = ref(false);
</script>

<template>
  <Vuedraggable
    :list="store.layout.rows"
    item-key="rows"
    class="draggable-rows"
    ghost-class="ghost"
    @start="dragging = true"
    @end="dragging = false"
    direction="vertical"
    :group="{ name: 'layout', pull: 'clone', put: false }"
  >
    <template #item="{ element, index }">
      <DOMField :row="element" :index="index"/>
    </template>
  </Vuedraggable>
</template>


<style scoped lang="scss">
.ghost {
  opacity: 0.5;
  background: #369;
}

.draggable-rows {
  margin-top: 50px; // Temporal for development.
  border: 1px solid purple;
}
</style>
