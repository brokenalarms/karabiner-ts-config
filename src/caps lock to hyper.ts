import { map, toNone, rule, toStickyModifier } from 'karabiner.ts'

export const capslockToEscAndHyper = [
  rule('Caps + Quote -> Hyper').manipulators([
    map('⇪')
      .toIfAlone('escape', {}, { halt: true })
      .toDelayedAction(toNone(), [
        toStickyModifier('left_shift', 'toggle'),
        toStickyModifier('left_control', 'toggle'),
        toStickyModifier('left_option', 'toggle'),
        toStickyModifier('left_command', 'toggle'),
      ])
      .toIfHeldDown('l⇧', 'l⌘⌥⌃', { halt: true }),
  ]),
]
