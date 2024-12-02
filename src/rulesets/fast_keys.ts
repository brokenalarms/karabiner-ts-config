import { LayerKeyParam, map, simlayer } from 'karabiner.ts'
import { LayerConfig } from '../config/layout_mappings'

export const fastKeys = ({ layerLocation, location }: LayerConfig) => [
  simlayer(layerLocation.d, 'fast-keys', 200).manipulators([
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
