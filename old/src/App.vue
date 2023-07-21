<script setup lang="ts">
import {useLayoutStore} from '@/stores/layout'
import {defineAsyncComponent, ref} from 'vue'

const store = useLayoutStore();
store.pullLayout().then(r => console.log(r))
store.pullFreeComponents().then(r => console.log(r))

const LayoutBuilder = defineAsyncComponent(() => import('@/components/LayoutBuilder.vue'))

let builderLaunched = ref(true);

const launch = (e: Event): void => {
  e.preventDefault();
  builderLaunched.value = true;
}
</script>

<template>
  <a href="#" @click="launch" v-if="!builderLaunched">Launch</a>

  <LayoutBuilder v-if="builderLaunched"/>
</template>
