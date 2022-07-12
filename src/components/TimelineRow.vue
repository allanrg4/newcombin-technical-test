<script setup lang="ts">
import draggable from "vuedraggable";

import { Item, Track } from '../models';

const props = defineProps<{
  index: number,
  track: Track
}>()

function calculateStyle(item: Item) {
  return {
    'background-color': `#${item.color}`,
    'width': `${item.size}rem !important`
  }
}

function checkMove(evt, originalEvt) {
  console.log(evt)
  console.log(originalEvt)
}
</script>

<template>
  <div class="flex flex-row divide-x">
    <div class="basis-1/12 grow-0 shrink-0 flex justify-center items-center h-20">
      <span>Track {{ props.index + 1 }}</span>
    </div>

    <draggable v-model="track.items" item-key="id" group="files"
        class="grow shrink-0 flex flex-row list-group">
      <template #item="{ element }">
        <div class="hover:bg-slate-300 border-2" :style="calculateStyle(element)"></div>
      </template>
    </draggable>
  </div>
</template>
