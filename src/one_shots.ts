import { toNone, toKey, map, rule } from 'karabiner.ts'
import { location } from './constants'

export const oneShots = [
  rule('One shots').manipulators([
    // Screenshot
    map(4)
      .toIfAlone(4)
      .toIfHeldDown(4, ['l⌘⌃⇧'], { halt: true, repeat: false })
      .toDelayedAction(toNone(), toKey(4))
      .parameters({
        'basic.to_if_alone_timeout_milliseconds': 300,
        'basic.to_if_held_down_threshold_milliseconds': 300
      }),
    // Bitwarden
    map(location.l)
      .toIfAlone(location.l)
      .toIfHeldDown(location.l, ['l⌘⇧'], { halt: true, repeat: false })
      // .toDelayedAction(toNone(), toKey(location.l))
      .parameters({
        'basic.to_if_held_down_threshold_milliseconds': 300,
        'basic.to_if_alone_timeout_milliseconds': 300
       }),
  ]),
]