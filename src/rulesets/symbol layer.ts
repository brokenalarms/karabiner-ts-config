import {
  FromAndToKeyCode,
  layer,
  LayerKeyParam,
  map,
  NumberKeyValue,
  withMapper,
} from 'karabiner.ts'
import { LayerConfig } from '../config/layout_mappings'

export const symbolLayer = ({ layerLocation }: LayerConfig) => [
  layer(layerLocation.slash, 'symbol-mode').manipulators([
    //     / + [ 1    2    3    4,   5] =>
    withMapper(['⇧', '⌃', '⌥', '⌘', '⏎', '⌦'])((k, i) =>
      map((i + 1) as NumberKeyValue).toPaste(k),
    ),
    withMapper(['←', '→', '↑', '↓', '␣', '⏎', '⇥', '⎋', '⌫', '⌦', '⇪'])((k) =>
      map(k).toPaste(k),
    ),
  ]),
]
