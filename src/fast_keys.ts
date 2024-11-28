import { simlayer, map, toKey, toNone } from 'karabiner.ts'

export const fastKeys = [
  simlayer(['d'], 'fast-keys').manipulators([
    map('␣').to('⏎'),
    map('u').to('⏎'),
    map('i').to('⌦'),
    map('o').to('⌫'),
  ]),
]
