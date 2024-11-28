import { simlayer, map, toKey, toNone } from 'karabiner.ts'
import { location } from './constants'

export const fastKeys = [
  simlayer(['d'], 'fast-keys', 200).manipulators([
    map('u').to('⏎'),
    map('i').to('⌦'),
    map('o').to('⌫'),
    map('h').to(location.open_bracket, 'left⇧'),
    map('j').to(location.close_bracket, 'left⇧'),
    map('k').to(location.open_bracket),
    map('l').to(location.close_bracket),
    map('n').to(location['9'], 'left⇧'),
    map('m').to(location['0'], 'left⇧'),
  ])
]