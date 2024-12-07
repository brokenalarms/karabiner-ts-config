import { ifApp, layer, map } from 'karabiner.ts'
import { LayerConfig } from '../config/layout_mappings'

export const vimNavigation = ({
  location,
  layerLocation,
  letter,
}: LayerConfig) => {
  return [
    layer(layerLocation.delete_or_backspace, 'vim-navigation-mode (Final Cut Pro)').condition(ifApp(['com\\.apple\\.FinalCut'])).manipulators([
      map(location.j).to('j'),
      map(location.k).to('k'),
      map(location.l).to('l'),
      map(location.i).to('i'),
      map(location.o).to('o'),
    ]),
    layer(layerLocation.x, 'vim-navigation-mode (other apps)').manipulators([
      map(location.h).to('left_arrow'),
      map(location.j).to('down_arrow'),
      map(location.k).to('up_arrow'),
      map(location.l).to('right_arrow'),
    ]),
  ]
}
