import {
  simlayer,
  map,
  toKey,
  toNone,
  LayerKeyParam,
  FromAndToKeyCode,
} from 'karabiner.ts'

export const fastKeys = (
  location: Record<string, FromAndToKeyCode>,
) => [
  simlayer(location.d as LayerKeyParam, 'fast-keys', 200).manipulators([
    map(location.y).to('⇥'),
    map(location.u).to('⏎'),
    map(location.i).to('⌦'),
    map(location.o).to('⌫'),
    map(location.h).to('open_bracket', 'left⇧'),
    map(location.j).to('close_bracket', 'left⇧'),
    map(location.k).to('open_bracket'),
    map(location.l).to('close_bracket'),
    map(location.n).to(9, 'left⇧'),
    map(location.m).to(0, 'left⇧'),
  ]),
]
