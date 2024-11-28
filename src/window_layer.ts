import { layer, map } from 'karabiner.ts'

export const windowLayer = [
  layer('q', 'window-mode').manipulators([
    map('h').to('left_arrow', ['l⇧', 'l⌥', 'l⌘']),
    map('j').to('down_arrow', ['l⇧', 'l⌥', 'l⌘']),
    map('k').to('up_arrow', ['l⇧', 'l⌥', 'l⌘']),
    map('l').to('right_arrow', ['l⇧', 'l⌥', 'l⌘']),
  ]),
]
