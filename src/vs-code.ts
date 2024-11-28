import {
  ifApp,
  map,
  rule,
} from 'karabiner.ts'
import { location } from './constants'

export const vsCode = [
  rule('Visual Studio Code', ifApp('Code')).manipulators([
    map('l⌘')
      .toIfHeldDown('l⌘', {}, { halt: true })
      .parameters({ 'basic.to_if_held_down_threshold_milliseconds': 80 })
      .toIfAlone(location.p, ['left_command', 'left_shift'], { halt: true }),
    map('l⌥')
      .toIfHeldDown('l⌥', {}, { halt: true })
      .parameters({ 'basic.to_if_held_down_threshold_milliseconds': 80 })
      .toIfAlone(location.p, ['left_command'], { halt: true }),
  ]),
]
