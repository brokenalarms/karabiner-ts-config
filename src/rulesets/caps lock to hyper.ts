import { map, FromAndToKeyCode, toNone, rule, toKey } from 'karabiner.ts'

export const toHyper = (
  location: Record<string, FromAndToKeyCode>
) => [
  rule('Caps + Quote -> Hyper').manipulators([
    map('⇪')
      .toIfAlone('escape', {}, { halt: true })
      .toDelayedAction(toNone(), toKey('escape'))
      .toIfHeldDown('l⇧', 'l⌘⌥⌃', { halt: true }),
  ]),
  rule('rcmd -> Hyper').manipulators([
    map('r⌘')
      .toIfAlone('r⌘', {}, { halt: true })
      .toIfHeldDown('l⌘', 'l⌥⌃⇧', { halt: true }),
  ]),
]
