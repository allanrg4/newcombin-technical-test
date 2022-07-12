import { defineStore } from 'pinia';

import { v4 as uuid } from 'uuid';

import { Item, Track } from '../models';

type State = {
  files: Item[],
  tracks: Track[],
}

export const useStore = defineStore('global', {
  state: () => ({
    files: [],
    tracks: [{
      id: uuid(),
      items: []
    }],
  }) as State,

  actions: {
    addFile() {
      this.files.push({
        id: uuid(),
        color: Math.floor(Math.random() * 16777215).toString(16),
        size: Math.floor(Math.random() * 24) + 1
      })
    },

    addTrack() {
      this.tracks.push({
        id: uuid(),
        items: [],
      })
    },
  }
})
