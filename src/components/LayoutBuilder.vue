<script setup lang="ts">
import {useLayoutStore} from '../stores/layout'
import RawJson from "../components/RawJson.vue";
import AvailableComponents from "../components/AvailableComponents.vue";
import LayoutCanvas from "../components/LayoutCanvas.vue";

const store = useLayoutStore();
store.layout = await store.pullLayout()
</script>

<template>
  <main class="skeleton">


    <suspense>
      <div class="sidebar">
        <h2>Available components</h2>
        <AvailableComponents/>
        <RawJson :data="store.layout" title="JSON layout"/>
      </div>
    </suspense>

    <div class="content">
      <LayoutCanvas/>
    </div>
  </main>
</template>

<style scoped>
.skeleton {
  display: flex;
}

.skeleton .sidebar {
  width: 30%;
}

.skeleton .content {
  width: 80%;
}
</style>
