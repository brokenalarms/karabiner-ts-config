import { FromAndToKeyCode, layer, LayerKeyParam, map } from 'karabiner.ts'
import { LayerConfig } from '../config/layout_mappings'

export const vimNavigation = ({
  location,
  layerLocation,
  profileName,
}: LayerConfig) => {
  return [
    layer(layerLocation.x, 'vim-navigation-mode').manipulators([
      map(location.h).to('left_arrow'),
      map(location.j).to('down_arrow'),
      map(location.k).to('up_arrow'),
      map(location.l).to('right_arrow'),
    ]),
  ]
}
