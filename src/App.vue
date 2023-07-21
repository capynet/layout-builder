<script setup lang="ts">
import {useLayoutStore} from './stores/layout'
import LayoutBuilder from "./components/LayoutBuilder.vue";

const store = useLayoutStore();
store.pullLayout().then(r => console.log(r))
store.pullFreeComponents().then(r => console.log(r))

</script>

<template>
  <LayoutBuilder/>
</template>
