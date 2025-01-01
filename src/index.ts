import { map, simlayer } from 'karabiner.ts'
import { profileConfigs } from './config/layout_config'
import { getLayerConfig } from './config/layout_mappings'
import { toHyper } from './rulesets/caps lock to hyper'
import { fastKeys } from './rulesets/fast_keys'
import { homeRowModsCtrlOptCommandShift } from './rulesets/homerow_mods_ctrl_opt_command_shift'
import { oneShots } from './rulesets/one_shots'
import { symbolLayer } from './rulesets/symbol layer'
import { vimNavigation } from './rulesets/vim_navigation'
import { vsCode } from './rulesets/vs-code'
import { windowLayer } from './rulesets/window_layer'
import { writeToProfileWithLocalOutput } from './utils/writeToProfileWithLocalOutput'
import { layer_emojiAndSnippet } from './rulesets/emoji'

// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.
profileConfigs.forEach((config) => {
  const layerConfig = getLayerConfig(config)
  writeToProfileWithLocalOutput(
    config.profileName,
    [
      ...fastKeys(layerConfig),
      ...windowLayer(layerConfig),
      ...symbolLayer(layerConfig),
      ...toHyper(layerConfig),
      ...vimNavigation(layerConfig),
      ...oneShots(layerConfig),
      ...homeRowModsCtrlOptCommandShift(layerConfig),
      ...vsCode(layerConfig),
      layer_emojiAndSnippet(layerConfig),
      // It is not required, but recommended to put symbol alias to layers,
      // to make it easier to write '←' instead of 'left_arrow'.
      // Supported alias: https://github.com/evan-liu/karabiner.ts/blob/main/src/utils/key-alias.ts

      // If you type fast, use simlayer instead, see https://github.com/yqrashawn/GokuRakuJoudo/blob/master/tutorial.md#simlayers
      simlayer('z', 'emoji-mode').manipulators([
        map('m').toPaste('🔀'), // Merge branches
      ]),

      // In Karabiner-Elements a 'rule' is a group of manipulators.
      // layer() and simlayer() are extended rule().
      // rule('Shell command').manipulators([
      //   // Use to$() to run a shell command
      //   map('⎋', 'Hyper').to$('rm -rf ~/wip'),
      //   // toApp() is shortcut for to$('open -a {app}.app')
      //   map('f', 'Meh').toApp('Finder'),
      // ]),

      // There are multiple ways of using modifiers
      // rule('Modifiers').manipulators([
      //   // You can use their key_code
      //   map('a', ['left_command', 'left_option']).to('b', ['fn']),
      //   // Or alias (easier to write if mapped to a layer)
      //   map('a', { left: '⌘⌥' }).to('b', 'fn'),
      //   // Or if it can be either left or right side:
      //   map('a', '⌘⌥').to('b', 'fn'),

      //   // 'Hyper' is ⌘⌥⌃⇧ and 'Meh' is ⌥⌃⇧
      //   // ⚠️ Note: Modifier alias (command|option|control|shift and ⌘⌥⌃⇧)
      //   //          can only be used as modifiers, but not as key_code
      //   map('right_command').toHyper(),
      //   map('⇪').toMeh().toIfAlone('⇪'),
      //   map('a', 'Hyper').to('b', 'Meh'),

      //   // Add optional modifiers after the mandatory modifiers. About optional modifiers:
      //   // https://karabiner-elements.pqrs.org/docs/json/complex-modifications-manipulator-definition/from/modifiers/#frommodifiersoptional
      //   map('a', '⌘', 'any').to('b'), // ⌘⇧a -> ⇧b
      // ]),

      // Rules can have conditions which will be added to all manipulators.
      // rule('Conditions', ifApp('^com.apple.finder$')).manipulators([
      //   // manipulators can also have multiple conditions
      //   // layer/simlayer are behind a 'variable_if' condition.
      //   // use unless() to switch {condition}_if to {condition}_unless
      //   map(0).to(1).condition(ifVar('vi-mode'), ifVar('stop').unless()),
      // ]),

      // // Optional parameters can be set when use
      // // - from.simultaneous  - basic.simultaneous_threshold_milliseconds
      // // - to_if_alone        - basic.to_if_alone_timeout_milliseconds
      // // - to_if_held_down    - basic.to_if_held_down_threshold_milliseconds
      // // - to_delayed_action  - basic.to_delayed_action_delay_milliseconds
      // rule('Parameters').manipulators([
      //   map('left_option')
      //     .toIfAlone('r', '⌘')
      //     .parameters({ 'basic.to_if_alone_timeout_milliseconds': 500 }),
      // ]),

      // // There are some other useful abstractions over the json config.
      // // [File an issue](https://github.com/evan-liu/karabiner.ts/issues) to suggest more.
      // rule('Other abstractions').manipulators([
      //   // Move the mouse cursor to a position and (optionally) to a screen.
      //   map('↑', 'Meh').toMouseCursorPosition({ x: '100%', y: 0 }),
      //   map('→', 'Meh').toMouseCursorPosition({ x: '50%', y: '50%', screen: 1 }),
      // ]),

      // // There are also some useful utilities
      // rule('Utility').manipulators([
      //   // For nested conditions inside rules/layers
      //   map(0).to(1).condition(ifVar('a')),
      //   // You can group them using withCondition()
      //   withCondition(ifVar('a'))([
      //     map(0).to(1),
      //     map(1).to(2).condition(ifApp('X').unless()), // And nest more conditions.
      //   ]),

      //   // Use withMapper() to apply the same mapping
      //   withMapper({ c: 'Calendar', f: 'Finder' })((k, v) =>
      //     map(k, 'Meh').toApp(v),
      //   ),

      //   // And some others like double-tap
      //   mapDoubleTap(1).to('w', '⌘'),
      // ]),
    ],
    {
      'basic.to_if_alone_timeout_milliseconds': 150,
      'basic.to_if_held_down_threshold_milliseconds': 150,
      'basic.to_delayed_action_delay_milliseconds': 200,
      'basic.simultaneous_threshold_milliseconds': 60,
      'mouse_motion_to_scroll.speed': 100,
      // karabiner.ts only parameters
      //   for simlayer()
      //'simlayer.threshold_milliseconds': 200
      //   for mapDoubleTap()
      //'double_tap.delay_milliseconds': 200,
    },
    config.outputPath,
  )
})
