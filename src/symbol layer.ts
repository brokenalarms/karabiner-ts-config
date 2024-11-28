import { layer, map, NumberKeyValue, withMapper } from 'karabiner.ts'

export const symbolLayer = [
  layer('/', 'symbol-mode').manipulators([
    //     / + [ 1    2    3    4,   5] =>
    withMapper(['⇧', '⌃', '⌥', '⌘', '⏎', '⌦'])((k, i) =>
      map((i + 1) as NumberKeyValue).toPaste(k),
    ),
    withMapper(['←', '→', '↑', '↓', '␣', '⏎', '⇥', '⎋', '⌫', '⌦', '⇪'])((k) =>
      map(k).toPaste(k),
    ),
  ]),
]
