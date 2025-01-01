import { duoLayer, ifApp, map, to$, toKey, toPaste, withCondition, withMapper } from "karabiner.ts"
import { LayerConfig } from "../config/layout_mappings"

export function layer_emojiAndSnippet({ layerLocation, location }: LayerConfig) {
  // See https://gitmoji.dev/
  let emojiMap = {
    b: '🐛', // Fix a bug
    c: '📅', // _calendar
    d: '📝', // add or update Documentation
    f: '🚩', // add, update, or remove Feature Flags
    h: '💯', // _hundred
    j: '😂', // _joy
    m: '🔀', // Merge branches
    n: '✨', // introduce New features
    p: '👍', // _plus_one +1
    r: '♻️', // Refactor code
    s: '😅', // _sweat_smile
    t: '🧵', // _thread
    u: '💄', // UI/Style
    v: '🔖', // release / Version tags
  }

  let emojiHint = Object.entries(emojiMap)
    .slice(0, 15)
    .reduce(
      (r, [k, v]) => [r[0].concat(v), r[1].concat(k.toUpperCase())],
      [[] as string[], [] as string[]],
    )
    .map((v, i) => v.join(i === 0 ? ' ' : '    '))
    .join('\n')

  let layer = duoLayer(layerLocation.z, layerLocation.x).notification(emojiHint)
  return layer.manipulators([
    map(location.slash).to(raycastExt('raycast/emoji-symbols/search-emoji-symbols')),

    withMapper(emojiMap)((k, v) => map(k).toPaste(v)),

    { 2: toPaste('⌫'), 3: toPaste('⌦'), 4: toPaste('⇥'), 5: toPaste('⎋') },
    { 6: toPaste('⌘'), 7: toPaste('⌥'), 8: toPaste('⌃'), 9: toPaste('⇧') },
    { 0: toPaste('⇪'), ',': toPaste('‹'), '.': toPaste('›') },

    withMapper(['←', '→', '↑', '↓', '␣', '⏎', '⌫', '⌦'])((k) =>
      map(k).toPaste(k),
    ),

    // Code snippets
    withCondition(ifApp('^com.microsoft.VSCode$'))([
      map('k').to('f20').to('k'),
      map('l').to('f20').to('l'),
    ]),
    withCondition(ifApp('^com.jetbrains.WebStorm$'))([
      map('k').toTypeSequence('afun'),
    ]),
    map('k').toTypeSequence('()␣=>␣'),
    map('l').toTypeSequence('console.log()←'),
    map('o').toTypeSequence('console.assert()←'),
    map('/').toTypeSequence('cn()←'),

    map("'").toTypeSequence('⌫"'),
    map('[').toTypeSequence('[␣]␣'),
    map(']').toTypeSequence('-␣[␣]␣'),

    { "'": toKey('⌫'), '\\': toKey('⌦') },
  ])
}


export function raycastExt(name: string) {
  return to$(`open raycast://extensions/${name}`)
}