const words = [
  {
    id: 'test1',
    written: 'sal tes tet'
  },
  // {
  //   id: 1,
  //   written: 'to',
  //   meanings: ['language', 'talk', 'speak', 'communicate', 'say', 'express'],
  //   tags: ['tokipona'],
  //   tokipona: ['toki'],
  // },
  // {
  //   id: 2,
  //   written: 'kui',
  //   meanings: ['the name of this language'],
  //   tags: [],
  //   tokipona: [],
  // },
  // {
  //   id: 3,
  //   written: 'to kui',
  //   meanings: ['the language kui', 'speak kui'],
  //   tags: [],
  //   tokipona: [],
  // },
  // {
  //   id: 4,
  //   written: 'lo',
  //   meanings: ['zero', 'none', 'empty', 'void'],
  //   tags: ['numbers'],
  //   tokipona: ['ala'],
  // },
  // {
  //   id: 5,
  //   written: 'wa',
  //   meanings: ['one', 'single'],
  //   tags: ['numbers'],
  //   tokipona: ['wan'],
  // },
  // {
  //   id: 6,
  //   written: 'nu',
  //   meanings: ['two', 'double', 'pair'],
  //   tags: ['numbers'],
  //   tokipona: ['tu'],
  // },
  // {
  //   id: 7,
  //   written: 'fe',
  //   meanings: ['three', 'triple', 'triad'],
  //   tags: ['numbers'],
  //   tokipona: [],
  // },
  // {
  //   id: 8,
  //   written: 'gi',
  //   meanings: ['four', 'quadruple'],
  //   tags: ['numbers'],
  //   tokipona: [],
  // },
  // {
  //   id: 9,
  //   written: 'pa',
  //   meanings: ['five', 'quintuple'],
  //   tags: ['numbers', 'tokipona'],
  //   tokipona: ['luka'],
  // },
  // {
  //   id: 10,
  //   written: 'tu',
  //   meanings: ['six', 'the base of this number system', '_ * 6** _', 'tu = 6', 'fe tu = 3*6 = 18', 'tu nu = 6**2 = 36', 'fe tu nu = 3*6**2 = 108'],
  //   tags: ['numbers'],
  //   tokipona: [],
  // },
  // {
  //   id: 11,
  //   written: 'giu',
  //   meanings: ['plus', 'add', 'give', 'bring'],
  //   tags: ['numbers', 'tokipona'],
  //   tokipona: ['pana'],
  // },
  // {
  //   id: 12,
  //   written: 'sa',
  //   meanings: ['equals', 'same', 'equivalent', 'identical'],
  //   tags: ['numbers', 'tokipona'],
  //   tokipona: ['sama'],
  // },
  // {
  //   id: 13,
  //   written: 'na',
  //   meanings: ['number'],
  //   tags: ['numbers', 'tokipona'],
  //   tokipona: ['nanpa'],
  // },
  // {
  //   id: 14,
  //   written: 'yui',
  //   meanings: ['minus', 'subtract', 'remove', 'take away', 'omit', 'absent', 'ignore', 'loose'],
  //   tags: ['numbers', 'tokipona'],
  //   tokipona: ['weka'],
  // },
]

export const w = (id) => words.filter(w => w.id === id)[0].written

export default words