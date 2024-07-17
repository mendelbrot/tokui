const V_solo = {
  i: [[0, 0, 0, 0]],
  e: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  a: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  o: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  u: [[0, 0, 0, 0]],
}

const C_surrounding = {
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const V_upper = {
  i: [[0, 0, 0, 0]],
  e: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  a: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  o: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  u: [[0, 0, 0, 0]],
}

const C_lower = {
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const V_lower = {
  i: [[0, 0, 0, 0]],
  e: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  a: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  o: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  u: [[0, 0, 0, 0]],
}

const C_left_surrounding = {
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const V_left_upper = {
  i: [[0, 0, 0, 0]],
  e: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  a: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  o: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  u: [[0, 0, 0, 0]],
}

const C_left_lower = {
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const V_left_lower = {
  i: [[0, 0, 0, 0]],
  e: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  a: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  o: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  u: [[0, 0, 0, 0]],
}

const X_right_top = {
  i: [[0, 0, 0, 0]],
  e: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  a: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  o: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  u: [[0, 0, 0, 0]],
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const X_right_bottom = {
  i: [[0, 0, 0, 0]],
  e: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  a: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  o: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  u: [[0, 0, 0, 0]],
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const C_alt_left = {
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const C_alt_right = {
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const C_alt_left_top = {
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const C_alt_left_bottom = {
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const C_alt_right_top = {
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const C_alt_right_bottom = {
  m: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  n: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  g: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  p: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  t: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  k: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  f: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  s: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  h: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  w: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  l: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  y: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
}

const partsCoordinates = {
  V_solo,
  C_surrounding,
  V_upper,
  C_lower,
  V_lower,
  C_left_surrounding,
  V_left_upper,
  C_left_lower,
  V_left_lower,
  X_right_top,
  X_right_bottom,
  C_alt_left,
  C_alt_right,
  C_alt_left_top,
  C_alt_left_bottom,
  C_alt_right_top,
  C_alt_right_bottom,
}

module.exports = partsCoordinates
