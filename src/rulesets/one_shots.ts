import {
  FromAndToKeyCode,
  toNone,
  toKey,
  map,
  hyperLayer,
  rule,
} from 'karabiner.ts'
import { ProfileConfig } from '../config/layout_config'
import { LayerConfig } from '../config/layout_mappings'

export const oneShots = ({ letter }: LayerConfig) => [
  rule('One shots').manipulators([
    // Screenshot
    map(4)
      .toIfAlone(4, {}, {halt: true})
      .toIfHeldDown(4, ['l⌘⌃⇧'], { halt: true, repeat: false })
      .toDelayedAction(toNone(), toKey(4))
      .parameters({
        'basic.to_if_alone_timeout_milliseconds': 300,
        'basic.to_if_held_down_threshold_milliseconds': 300,
      }),
  ]),
]
