<script setup lang="ts">
defineProps<{
  title: String,
  data: Object,
}>()
</script>

<template>
  <div class="raw-data">
    <h2>{{ title }}</h2>
    <pre>{{ data }}</pre>
  </div>
</template>

<style scoped lang="scss">
.raw-data {
  border: 1px solid blue;
  margin: 0;
  padding: 10px;
}
</style>
