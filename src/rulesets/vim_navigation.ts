import { FromAndToKeyCode, layer, LayerKeyParam, map } from 'karabiner.ts'

export const vimNavigation = (
  location: Record<string, FromAndToKeyCode>,
) => [
  layer([location.x as LayerKeyParam], 'vim-navigation-mode').manipulators([
    map(location.h).to('left_arrow'),
    map(location.j).to('down_arrow'),
    map(location.k).to('up_arrow'),
    map(location.l).to('right_arrow'),
  ]),
]

