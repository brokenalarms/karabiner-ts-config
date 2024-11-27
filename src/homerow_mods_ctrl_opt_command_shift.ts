import { map, mapSimultaneous, rule, toKey, toNone } from 'karabiner.ts'

// Home row mods
export const homeRowModsCtrlOptCommandShift = [
  rule('Home row mods - ctrl, opt, cmd, shift').manipulators([
    //
    // Four - left hand
    mapSimultaneous(['a', 'w', 'e', 'f']).toIfHeldDown('l⌃', [
      'l⌥',
      'l⌘',
      'l⇧',
    ]),
    //
    // Three - left hand
    mapSimultaneous(['a', 'w', 'e']).toIfHeldDown('l⌃', ['l⌥', 'l⌘']),
    mapSimultaneous(['a', 'w', 'f']).toIfHeldDown('l⌃', ['l⌥', 'l⇧']),
    mapSimultaneous(['a', 'e', 'f']).toIfHeldDown('l⌃', ['l⌘', 'l⇧']),
    mapSimultaneous(['w', 'e', 'f']).toIfHeldDown('l⌥', ['l⌘', 'l⇧']),
    //
    // Two - left hand
    mapSimultaneous(['a', 'w'], { key_down_order: 'strict' })
      .toIfAlone('a')
      .toIfAlone('w')
      .toIfHeldDown('l⌃', 'l⌥'),
    mapSimultaneous(['w', 'a'], { key_down_order: 'strict' })
      .toIfAlone('w')
      .toIfAlone('a')
      .toIfHeldDown('l⌥', 'l⌃'),
    mapSimultaneous(['a', 'e'], { key_down_order: 'strict' })
      .toIfAlone('a')
      .toIfAlone('e')
      .toIfHeldDown('l⌃', 'l⌘'),
    mapSimultaneous(['e', 'a'], { key_down_order: 'strict' })
      .toIfAlone('e')
      .toIfAlone('a')
      .toIfHeldDown('l⌘', 'l⌃'),
    mapSimultaneous(['a', 'f'], { key_down_order: 'strict' })
      .toIfAlone('a')
      .toIfAlone('f')
      .toIfHeldDown('l⌃', 'l⇧'),
    mapSimultaneous(['f', 'a'], { key_down_order: 'strict' })
      .toIfAlone('f')
      .toIfAlone('a')
      .toIfHeldDown('l⇧', 'l⌃'),
    mapSimultaneous(['w', 'e'], { key_down_order: 'strict' })
      .toIfAlone('w')
      .toIfAlone('e')
      .toIfHeldDown('l⌥', 'l⌘'),
    mapSimultaneous(['e', 'w'], { key_down_order: 'strict' })
      .toIfAlone('e')
      .toIfAlone('w')
      .toIfHeldDown('l⌘', 'l⌥'),
    mapSimultaneous(['w', 'f'], { key_down_order: 'strict' })
      .toIfAlone('w')
      .toIfAlone('f')
      .toIfHeldDown('l⌥', 'l⇧'),
    mapSimultaneous(['f', 'w'], { key_down_order: 'strict' })
      .toIfAlone('f')
      .toIfAlone('w')
      .toIfHeldDown('l⇧', 'l⌥'),
    mapSimultaneous(['e', 'f'], { key_down_order: 'strict' })
      .toIfAlone('e')
      .toIfAlone('f')
      .toIfHeldDown('l⌘', 'l⇧'),
    mapSimultaneous(['f', 'e'], { key_down_order: 'strict' })
      .toIfAlone('f')
      .toIfAlone('e')
      .toIfHeldDown('l⇧', 'l⌘'),
    //
    // One - left hand
    map('a')
      .toIfAlone('a', {}, { halt: true })
      .toDelayedAction(toNone(), toKey('a'))
      .toIfHeldDown('l⌃', {}, { halt: true }),
    map('w')
      .toIfAlone('w', {}, { halt: true })
      .toDelayedAction(toNone(), toKey('w'))
      .toIfHeldDown('l⌥', {}, { halt: true }),
    map('e')
      .toIfAlone('e', {}, { halt: true })
      .toDelayedAction(toNone(), toKey('e'))
      .toIfHeldDown('l⌘', {}, { halt: true }),
    map('f')
      .toIfAlone('f', {}, { halt: true })
      .toDelayedAction(toNone(), toKey('f'))
      .toIfHeldDown('l⇧', {}, { halt: true }),
    //
    //
    // Four - right hand
    mapSimultaneous(['j', 'i', 'o', ';']).toIfHeldDown('r⇧', [
      'r⌘',
      'r⌥',
      'r⌃',
    ]),
    //
    // Three - right hand
    mapSimultaneous([';', 'o', 'i']).toIfHeldDown('r⌃', ['r⌥', 'r⌘']),
    mapSimultaneous([';', 'o', 'j']).toIfHeldDown('r⌃', ['r⌥', 'r⇧']),
    mapSimultaneous([';', 'i', 'j']).toIfHeldDown('r⌃', ['r⌘', 'r⇧']),
    mapSimultaneous(['o', 'i', 'j']).toIfHeldDown('r⌥', ['r⌘', 'r⇧']),
    //
    // Two - right hand
    mapSimultaneous([';', 'o'], { key_down_order: 'strict' })
      .toIfAlone(';')
      .toIfAlone('o')
      .toIfHeldDown('r⌃', 'r⌥'),
    mapSimultaneous(['o', ';'], { key_down_order: 'strict' })
      .toIfAlone('o')
      .toIfAlone(';')
      .toIfHeldDown('r⌥', 'r⌃'),
    mapSimultaneous([';', 'i'], { key_down_order: 'strict' })
      .toIfAlone(';')
      .toIfAlone('i')
      .toIfHeldDown('r⌃', 'r⌘'),
    mapSimultaneous(['i', ';'], { key_down_order: 'strict' })
      .toIfAlone('i')
      .toIfAlone(';')
      .toIfHeldDown('r⌘', 'r⌃'),
    mapSimultaneous([';', 'j'], { key_down_order: 'strict' })
      .toIfAlone(';')
      .toIfAlone('j')
      .toIfHeldDown('r⌃', 'r⇧'),
    mapSimultaneous(['j', ';'], { key_down_order: 'strict' })
      .toIfAlone('j')
      .toIfAlone(';')
      .toIfHeldDown('r⇧', 'r⌃'),
    mapSimultaneous(['o', 'i'], { key_down_order: 'strict' })
      .toIfAlone('o')
      .toIfAlone('i')
      .toIfHeldDown('r⌥', 'r⌘'),
    mapSimultaneous(['i', 'o'], { key_down_order: 'strict' })
      .toIfAlone('i')
      .toIfAlone('o')
      .toIfHeldDown('r⌘', 'r⌥'),
    mapSimultaneous(['o', 'j'], { key_down_order: 'strict' })
      .toIfAlone('o')
      .toIfAlone('j')
      .toIfHeldDown('r⌥', 'r⇧'),
    mapSimultaneous(['j', 'o'], { key_down_order: 'strict' })
      .toIfAlone('j')
      .toIfAlone('o')
      .toIfHeldDown('r⇧', 'r⌥'),
    mapSimultaneous(['i', 'j'], { key_down_order: 'strict' })
      .toIfAlone('i')
      .toIfAlone('j')
      .toIfHeldDown('r⌘', 'r⇧'),
    mapSimultaneous(['j', 'i'], { key_down_order: 'strict' })
      .toIfAlone('j')
      .toIfAlone('i')
      .toIfHeldDown('r⇧', 'r⌘'),
    //
    // One - right hand
    map(';')
      .toIfAlone(';', {}, { halt: true })
      .toDelayedAction(toNone(), toKey(';'))
      .toIfHeldDown('r⌃', {}, { halt: true }),
    map('o')
      .toIfAlone('o', {}, { halt: true })
      .toDelayedAction(toNone(), toKey('o'))
      .toIfHeldDown('r⌥', {}, { halt: true }),
    map('i')
      .toIfAlone('i', {}, { halt: true })
      .toDelayedAction(toNone(), toKey('i'))
      .toIfHeldDown('r⌘', {}, { halt: true }),
    map('j')
      .toIfAlone('j', {}, { halt: true })
      .toDelayedAction(toNone(), toKey('j'))
      .toIfHeldDown('r⇧', {}, { halt: true }),
  ]),
]
