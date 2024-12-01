import { FromAndToKeyCode, toNone, toKey, map, hyperLayer } from 'karabiner.ts'

export const oneShots = (location: Record<string, FromAndToKeyCode>) => [
  hyperLayer('o', 'One shots').manipulators([
    // Screenshot
    map(4)
      .toIfAlone(4)
      .toIfHeldDown(4, ['l⌘⌃⇧'], { halt: true, repeat: false })
      .toDelayedAction(toNone(), toKey(4))
      .parameters({
        'basic.to_if_alone_timeout_milliseconds': 300,
        'basic.to_if_held_down_threshold_milliseconds': 300,
      }),
    // Bitwarden
    map('l')
      .toIfAlone('l')
      .toIfHeldDown('l', ['l⌘⇧'], { halt: true, repeat: false })
      // .toDelayedAction(toNone(), toKey(location.l))
      .parameters({
        'basic.to_if_held_down_threshold_milliseconds': 300,
        'basic.to_if_alone_timeout_milliseconds': 300,
      }),
  ]),
]
