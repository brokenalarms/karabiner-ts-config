import { map, toNone, rule, toKey } from 'karabiner.ts'

export const capslockToEscAndHyper = [
  rule('Caps + Quote -> Hyper').manipulators([
    map('⇪')
      .toIfAlone('escape', {}, { halt: true })
      .toDelayedAction(toNone(), toKey('escape'))
      .toIfHeldDown('l⇧', 'l⌘⌥⌃', { halt: true }),
  ]),
]

export const rightCmdToHyper = [
  rule('rcmd -> Hyper').manipulators([
    map('r⌘')
      .toIfAlone('r⌘', {}, { halt: true })
      .toIfHeldDown('l⌘', 'l⌥⌃⇧', { halt: true }),
  ]),
]

export const toHyper = [...capslockToEscAndHyper, ...rightCmdToHyper]