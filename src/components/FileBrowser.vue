<script setup lang="ts">
import { reactive } from 'vue';

import draggable from "vuedraggable";

import { TicketIcon, PlusSmIcon } from '@heroicons/vue/outline';

import { useStore } from '../store/global';

const store = useStore()

const groupOptions = reactive({
  name: 'files',
  pull: 'clone',
  put: false,
})
</script>

<template>
  <draggable v-model="store.files" item-key="id" :group="groupOptions"
      class="grid grid-cols-3 gap-x-4 gap-y-2 px-4">
    <template #item="{ index }">
      <div class="flex justify-center items-center p-2 hover:bg-slate-300">
        <div class="h-16">
          <TicketIcon class="h-10"/>
          File {{ index + 1 }}
        </div>
      </div>
    </template>
  </draggable>

  <div class="flex justify-center my-2">
    <button class="flex flex-col items-center"
        @click="store.addFile">
      <PlusSmIcon class="h-10"/>
      Add File
    </button>
  </div>
</template>
