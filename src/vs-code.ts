import {
  ifApp,
  layer,
  map,
  NumberKeyValue,
  rule,
  toNone,
  toKey,
  withMapper,
} from 'karabiner.ts'
import { outMapping } from './constants'

export const vsCode = [
  rule('Visual Studio Code', ifApp('Code')).manipulators([
    map('l⌘')
      .toIfHeldDown('l⌘', {}, { halt: true })
      .toIfAlone(outMapping.p, ['left_command', 'left_shift'], { halt: true, }),
    map('r⌘')
      .toIfHeldDown('r⌘', {}, { halt: true })
      .toIfAlone(outMapping.p, ['left_command'], { halt: true })
  ]),
]
