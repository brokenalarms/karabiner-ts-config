import { ToKeyParam } from "karabiner.ts"

export const hyper = ['l⇧', 'l⌃', 'l⌥', 'l⌘']
export const meh = ['l⇧', 'l⌃', 'l⌥']

const useDvorak = true

// Map QWERTY physical keys to Dvorak logical values
const qwertyToDvorak: Record<string, ToKeyParam> = {
  // Letters
  a: 'a',
  b: 'x',
  c: 'j',
  d: 'e',
  e: '.',
  f: 'u',
  g: 'i',
  h: 'd',
  i: 'c',
  j: 'h',
  k: 't',
  l: 'n',
  m: 'm',
  n: 'b',
  o: 'y',
  p: 'r',
  q: "'",
  r: 'p',
  s: 'o',
  t: 'g',
  u: 'k',
  v: 'q',
  w: ',',
  x: ';',
  y: 'f',
  z: '/',

  // Numbers
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '0': '0',

  // Special Characters
  '-': '[',
  '=': ']',
  '[': '/',
  ']': '=',
  '\\': '\\',
  ';': 's',
  "'": '-',
  ',': 'w',
  '.': 'v',
  '/': 'z',
}

// Generate a QWERTY-to-QWERTY mapping
const qwertyToQwerty: Record<string, ToKeyParam> = Object.keys(
  qwertyToDvorak,
).reduce((acc, key) => {
  acc[key] = key as ToKeyParam // Type assertion to ensure key matches QwertyKeys
  return acc
}, {} as Record<string, ToKeyParam>)

// Select the mapping based on `useDvorak`
export const outMapping: Record<string, ToKeyParam> = useDvorak
  ? qwertyToDvorak
  : qwertyToQwerty