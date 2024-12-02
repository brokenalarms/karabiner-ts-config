import {
  map,
  mapSimultaneous,
  rule,
  FromAndToKeyCode,
  toKey,
  toNone,
} from 'karabiner.ts'

export const homeRowModsCtrlOptCommandShift = (
  location: Record<string, FromAndToKeyCode>,
) => [
  rule('Home row mods - ctrl, opt, cmd, shift').manipulators([
    //
    // Four - left hand
    mapSimultaneous([
      location.a,
      location.w,
      location.e,
      location.f,
    ]).toIfHeldDown('l⌃', ['l⌥', 'l⌘', 'l⇧']),
    //
    // Three - left hand
    mapSimultaneous([location.a, location.w, location.e]).toIfHeldDown('l⌃', [
      'l⌥',
      'l⌘',
    ]),
    mapSimultaneous([location.a, location.w, location.f]).toIfHeldDown('l⌃', [
      'l⌥',
      'l⇧',
    ]),
    mapSimultaneous([location.a, location.e, location.f]).toIfHeldDown('l⌃', [
      'l⌘',
      'l⇧',
    ]),
    mapSimultaneous([location.w, location.e, location.f]).toIfHeldDown('l⌥', [
      'l⌘',
      'l⇧',
    ]),
    //
    // Two - left hand
    mapSimultaneous([location.a, location.w], { key_down_order: 'strict' })
      .toIfAlone(location.a)
      .toIfAlone(location.w)
      .toIfHeldDown('l⌃', 'l⌥'),
    mapSimultaneous([location.w, location.a], { key_down_order: 'strict' })
      .toIfAlone(location.w)
      .toIfAlone(location.a)
      .toIfHeldDown('l⌥', 'l⌃'),
    mapSimultaneous([location.a, location.e], { key_down_order: 'strict' })
      .toIfAlone(location.a)
      .toIfAlone(location.e)
      .toIfHeldDown('l⌃', 'l⌘'),
    mapSimultaneous([location.e, location.a], { key_down_order: 'strict' })
      .toIfAlone(location.e)
      .toIfAlone(location.a)
      .toIfHeldDown('l⌘', 'l⌃'),
    mapSimultaneous([location.a, location.f], { key_down_order: 'strict' })
      .toIfAlone(location.a)
      .toIfAlone(location.f)
      .toIfHeldDown('l⌃', 'l⇧'),
    mapSimultaneous([location.f, location.a], { key_down_order: 'strict' })
      .toIfAlone(location.f)
      .toIfAlone(location.a)
      .toIfHeldDown('l⇧', 'l⌃'),
    mapSimultaneous([location.w, location.e], { key_down_order: 'strict' })
      .toIfAlone(location.w)
      .toIfAlone(location.e)
      .toIfHeldDown('l⌥', 'l⌘'),
    mapSimultaneous([location.e, location.w], { key_down_order: 'strict' })
      .toIfAlone(location.e)
      .toIfAlone(location.w)
      .toIfHeldDown('l⌘', 'l⌥'),
    mapSimultaneous([location.w, location.f], { key_down_order: 'strict' })
      .toIfAlone(location.w)
      .toIfAlone(location.f)
      .toIfHeldDown('l⌥', 'l⇧'),
    mapSimultaneous([location.f, location.w], { key_down_order: 'strict' })
      .toIfAlone(location.f)
      .toIfAlone(location.w)
      .toIfHeldDown('l⇧', 'l⌥'),
    mapSimultaneous([location.e, location.f], { key_down_order: 'strict' })
      .toIfAlone(location.e)
      .toIfAlone(location.f)
      .toIfHeldDown('l⌘', 'l⇧'),
    mapSimultaneous([location.f, location.e], { key_down_order: 'strict' })
      .toIfAlone(location.f)
      .toIfAlone(location.e)
      .toIfHeldDown('l⇧', 'l⌘'),
    //
    // One - left hand
    map(location.a)
      .toIfAlone(location.a, {}, { halt: true })
      .toDelayedAction(toNone(), toKey(location.a))
      .toIfHeldDown('l⌃', {}, { halt: true })
      .parameters({
        'basic.to_if_alone_timeout_milliseconds': 150,
        'basic.to_if_held_down_threshold_milliseconds': 150,
      }),
    map(location.w)
      .toIfAlone(location.w, {}, { halt: true })
      .toDelayedAction(toNone(), toKey(location.w))
      .toIfHeldDown('l⌥', {}, { halt: true })
      .parameters({
        'basic.to_if_alone_timeout_milliseconds': 150,
        'basic.to_if_held_down_threshold_milliseconds': 150,
      }),
    map(location.e)
      .toIfAlone(location.e, {}, { halt: true })
      .toDelayedAction(toNone(), toKey(location.e))
      .toIfHeldDown('l⌘', {}, { halt: true })
      .parameters({
        'basic.to_if_alone_timeout_milliseconds': 150,
        'basic.to_if_held_down_threshold_milliseconds': 150,
      }),
    map(location.f)
      .toIfAlone(location.f, {}, { halt: true })
      .toDelayedAction(toNone(), toKey(location.f))
      .toIfHeldDown('l⇧', {}, { halt: true })
      .parameters({
        'basic.to_if_alone_timeout_milliseconds': 150,
        'basic.to_if_held_down_threshold_milliseconds': 150,
      }),
    //
    //
    // Four - right hand
    mapSimultaneous([
      location.j,
      location.i,
      location.o,
      location.semicolon,
    ]).toIfHeldDown('r⇧', ['r⌘', 'r⌥', 'r⌃']),
    //
    // Three - right hand
    mapSimultaneous([location.semicolon, location.o, location.i]).toIfHeldDown(
      'r⌃',
      ['r⌥', 'r⌘'],
    ),
    mapSimultaneous([location.semicolon, location.o, location.j]).toIfHeldDown(
      'r⌃',
      ['r⌥', 'r⇧'],
    ),
    mapSimultaneous([location.semicolon, location.i, location.j]).toIfHeldDown(
      'r⌃',
      ['r⌘', 'r⇧'],
    ),
    mapSimultaneous([location.o, location.i, location.j]).toIfHeldDown('r⌥', [
      'r⌘',
      'r⇧',
    ]),
    //
    // Two - right hand
    mapSimultaneous([location.semicolon, location.o], {
      key_down_order: 'strict',
    })
      .toIfAlone(location.semicolon)
      .toIfAlone(location.o)
      .toIfHeldDown('r⌃', 'r⌥'),
    mapSimultaneous([location.o, location.semicolon], {
      key_down_order: 'strict',
    })
      .toIfAlone(location.o)
      .toIfAlone(location.semicolon)
      .toIfHeldDown('r⌥', 'r⌃'),
    mapSimultaneous([location.semicolon, location.i], {
      key_down_order: 'strict',
    })
      .toIfAlone(location.semicolon)
      .toIfAlone(location.i)
      .toIfHeldDown('r⌃', 'r⌘'),
    mapSimultaneous([location.i, location.semicolon], {
      key_down_order: 'strict',
    })
      .toIfAlone(location.i)
      .toIfAlone(location.semicolon)
      .toIfHeldDown('r⌘', 'r⌃'),
    mapSimultaneous([location.semicolon, location.j], {
      key_down_order: 'strict',
    })
      .toIfAlone(location.semicolon)
      .toIfAlone(location.j)
      .toIfHeldDown('r⌃', 'r⇧'),
    mapSimultaneous([location.j, location.semicolon], {
      key_down_order: 'strict',
    })
      .toIfAlone(location.j)
      .toIfAlone(location.semicolon)
      .toIfHeldDown('r⇧', 'r⌃'),
    mapSimultaneous([location.o, location.i], { key_down_order: 'strict' })
      .toIfAlone(location.o)
      .toIfAlone(location.i)
      .toIfHeldDown('r⌥', 'r⌘'),
    mapSimultaneous([location.i, location.o], { key_down_order: 'strict' })
      .toIfAlone(location.i)
      .toIfAlone(location.o)
      .toIfHeldDown('r⌘', 'r⌥'),
    mapSimultaneous([location.o, location.j], { key_down_order: 'strict' })
      .toIfAlone(location.o)
      .toIfAlone(location.j)
      .toIfHeldDown('r⌥', 'r⇧'),
    mapSimultaneous([location.j, location.o], { key_down_order: 'strict' })
      .toIfAlone(location.j)
      .toIfAlone(location.o)
      .toIfHeldDown('r⇧', 'r⌥'),
    mapSimultaneous([location.i, location.j], { key_down_order: 'strict' })
      .toIfAlone(location.i)
      .toIfAlone(location.j)
      .toIfHeldDown('r⌘', 'r⇧'),
    mapSimultaneous([location.j, location.i], { key_down_order: 'strict' })
      .toIfAlone(location.j)
      .toIfAlone(location.i)
      .toIfHeldDown('r⇧', 'r⌘'),
    //
    // One - right hand
    map(location.semicolon)
      .toIfAlone(location.semicolon, {}, { halt: true })
      .toDelayedAction(toNone(), toKey(location.semicolon))
      .toIfHeldDown('r⌃', {}, { halt: true })
      .parameters({
        'basic.to_if_alone_timeout_milliseconds': 150,
        'basic.to_if_held_down_threshold_milliseconds': 150,
      }),
    map(location.o)
      .toIfAlone(location.o, {}, { halt: true })
      .toDelayedAction(toNone(), toKey(location.o))
      .toIfHeldDown('r⌥', {}, { halt: true })
      .parameters({
        'basic.to_if_alone_timeout_milliseconds': 150,
        'basic.to_if_held_down_threshold_milliseconds': 150,
      }),
    map(location.i)
      .toIfAlone(location.i, {}, { halt: true })
      .toDelayedAction(toNone(), toKey(location.i))
      .toIfHeldDown('r⌘', {}, { halt: true })
      .parameters({
        'basic.to_if_alone_timeout_milliseconds': 150,
        'basic.to_if_held_down_threshold_milliseconds': 150,
      }),
    map(location.j)
      .toIfAlone(location.j, {}, { halt: true })
      .toDelayedAction(toNone(), toKey(location.j))
      .toIfHeldDown('r⇧', {}, { halt: true })
      .parameters({
        'basic.to_if_alone_timeout_milliseconds': 150,
        'basic.to_if_held_down_threshold_milliseconds': 150,
      }),
  ]),
]
