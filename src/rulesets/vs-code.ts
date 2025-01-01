import { ifApp, map, rule } from 'karabiner.ts'
import { LayerConfig } from '../config/layout_mappings'

export const vsCode = ({ letter }: LayerConfig) => [
  rule('Visual Studio Code', ifApp('Code')).manipulators([
    map('l⌘')
      .toIfHeldDown('l⌘', {}, { halt: true })
      .parameters({ 'basic.to_if_held_down_threshold_milliseconds': 100 })
      .toIfAlone(letter.p, ['left_command', 'left_shift'], { halt: true }),
    map('l⌥')
      .toIfHeldDown('l⌥', {}, { halt: true })
      .parameters({ 'basic.to_if_held_down_threshold_milliseconds': 100 })
      .toIfAlone(letter.p, ['left_command'], { halt: true }),
  ]),
]
