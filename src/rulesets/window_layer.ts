import { map, simlayer, withMapper } from 'karabiner.ts'
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
    simlayer(layerLocation.grave_accent_and_tilde, 'window-mode').manipulators([
      withMapper([location.left_arrow, location.h])((k, _) => map(k).to('left_arrow', ['l⇧', 'l⌥', 'l⌘'])),
      withMapper([location.down_arrow, location.j])((k, _) => map(k).to('down_arrow', ['l⇧', 'l⌥', 'l⌘'])),
      withMapper([location.up_arrow, location.k])((k, _) => map(k).to('down_arrow', ['l⇧', 'l⌥', 'l⌘'])),
      withMapper([location.right_arrow, location.l])((k, _) => map(k).to('down_arrow', ['l⇧', 'l⌥', 'l⌘'])),
    ]),
  ]
}
