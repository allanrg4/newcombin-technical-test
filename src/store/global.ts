import { defineStore } from 'pinia';

import { Item, Track } from '../models';

type State = {
  files: Item[],
  tracks: Track[],
}

export const useStore = defineStore('global', {
  state: () => ({
    files: [],
    tracks: [{ items: [] }],
  }) as State,

  actions: {
    addFile() {
      this.files.push({
        color: Math.floor(Math.random() * 16777215).toString(16),
        size: Math.floor(Math.random() * 24) + 1
      })
    },

    addTrack() {
      this.tracks.push({
        items: [],
      })
    },
  }
})
