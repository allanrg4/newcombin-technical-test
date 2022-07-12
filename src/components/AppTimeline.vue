<script setup lang="ts">
import { PlusSmIcon } from '@heroicons/vue/outline';

import TimelineRow from '../components/TimelineRow.vue';

import { useStore } from '../store/global';

const store = useStore()
</script>

<template>
  <div class="flex flex-col divide-y">
    <timeline-row
        v-for="(track, i) in store.tracks"
        :key="track.id"
        :index="i"
        :track="track"
    ></timeline-row>

    <div class="p-2">
      <button class="flex flex-col items-center h-12"
          @click="store.addTrack">
        <PlusSmIcon class="h-10"/>
        Add Track
      </button>
    </div>
  </div>
</template>
