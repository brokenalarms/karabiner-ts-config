import { layer, map } from 'karabiner.ts'

export const vimDvorakNavigation = [
  // Layer for 'd' (DVORAK h/l -> left/right)
  layer('d', 'vim-navigation-mode').manipulators([
    map('h').to('left_arrow'),
    map('j').to('down_arrow'),
    map('k').to('up_arrow'),
    map('l').to('right_arrow'),
  ]),
]
