import { FromAndToKeyCode, layer, LayerKeyParam, map, rule } from 'karabiner.ts'

/**
 * Generate a windowLayer rule set based on the provided configuration.
 * @param config Configuration object containing layer and hardwareTranslation.
 * @returns Configured windowLayer rule set.
 */
export const windowLayer = (location: Record<string, FromAndToKeyCode>) => [
  layer(location.q as LayerKeyParam, 'window-mode').manipulators([
    map(location.h).to('left_arrow', ['l⇧', 'l⌥', 'l⌘']),
    map(location.j).to('down_arrow', ['l⇧', 'l⌥', 'l⌘']),
    map(location.k).to('up_arrow', ['l⇧', 'l⌥', 'l⌘']),
    map(location.l).to('right_arrow', ['l⇧', 'l⌥', 'l⌘']),
  ]),
]