import { FromAndToKeyCode, layer, LayerKeyParam, map, rule } from 'karabiner.ts'
import { LayerConfig } from '../config/layout_mappings'

/**
 * Generate a windowLayer rule set based on the provided configuration.
 * @param config Configuration object containing layer and hardwareTranslation.
 * @returns Configured windowLayer rule set.
 */
export const windowLayer = ({
  layerLocation,
  location,
  profileName,
}: LayerConfig) => {
  console.log(`window layer key for ${profileName}: ${layerLocation.q}`)
  return [
    layer(layerLocation.q, 'window-mode').manipulators([
      map(location.h).to('left_arrow', ['l⇧', 'l⌥', 'l⌘']),
      map(location.j).to('down_arrow', ['l⇧', 'l⌥', 'l⌘']),
      map(location.k).to('up_arrow', ['l⇧', 'l⌥', 'l⌘']),
      map(location.l).to('right_arrow', ['l⇧', 'l⌥', 'l⌘']),
    ]),
  ]
}
