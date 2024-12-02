import { map, rule, toKey, toNone } from 'karabiner.ts'
import { LayerConfig } from '../config/layout_mappings'

export const toHyper = (_: LayerConfig) => [
  rule('Caps and Hyper').manipulators([
    map('caps_lock')
      .toIfAlone('escape', {}, { halt: true })
      .toDelayedAction(toNone(), toKey('escape'))
      .toIfHeldDown('l⌘', 'l⌥⌃⇧', { halt: true }),
    map('escape')
      .toIfAlone('escape', {}, { halt: true })
      .toDelayedAction(toNone(), toKey('escape'))
      .toIfHeldDown('l⌘', 'l⌥⌃⇧', { halt: true }),
  ]),
]
