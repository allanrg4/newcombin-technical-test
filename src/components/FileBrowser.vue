<script setup lang="ts">
import { TicketIcon, PlusSmIcon } from '@heroicons/vue/outline';

import { useStore } from '../store/global';

const store = useStore()
</script>

<template>
  <div class="grid grid-cols-3 gap-x-4 gap-y-2">
    <div class="flex justify-center"
        v-for="(item, i) in store.files"
        :key="`item-${i}`">
      <button class="h-16">
        <TicketIcon class="h-10"/>
        Size {{ item.size }}
      </button>
    </div>

    <div class="flex justify-center">
      <button class="flex flex-col items-center h-16"
          @click="store.addFile">
        <PlusSmIcon class="h-10"/>
        Add File
      </button>
    </div>
  </div>
</template>
