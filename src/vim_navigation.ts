import { layer, map, toKey, toNone } from 'karabiner.ts'

export const vimNavigation = [
  layer(['d'], 'vim-navigation-mode').manipulators([
    map('h').to('left_arrow'),
    map('j').to('down_arrow'),
    map('k').to('up_arrow'),
    map('l').to('right_arrow'),
  ]),
]
