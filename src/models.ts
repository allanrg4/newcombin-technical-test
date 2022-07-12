export interface Item {
  id: string
  color: string
  size: number
}

export interface Track {
  id: string
  items: Item[]
}
