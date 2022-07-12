<script setup lang="ts">
import { defineProps } from 'vue';

import { Track } from '../models';

const props = defineProps<{
  index: number,
  track: Track
}>()
</script>

<template>
  <div class="flex flex-row divide-x">
    <div class="basis-1/12 flex justify-center items-center h-12 p-2">
      <span>Track {{ props.index + 1 }}</span>
    </div>

    <div class="grow p-2">
      <span>content</span>
    </div>
  </div>
</template>
