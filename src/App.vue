<script setup lang="ts">
import FileBrowser from './components/FileBrowser.vue';
import AppTimeline from './components/AppTimeline.vue';
</script>

<template>
  <div class="flex flex-row divide-x border-b-2">
    <div class="shrink-0 basis-1/4 pt-3">
      <file-browser/>
    </div>

    <div class="shrink-0 basis-3/4">
      <app-timeline/>
    </div>
  </div>
</template>
