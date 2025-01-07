# the tokui website

This is the source code for:
https://tokui.vercel.app/

## getting started

Follow these instructions if you would like to run the website locally on your computer:

**1. download and install node**

https://nodejs.org/en/download

**2. download and install git**

https://git-scm.com/downloads

**3. clone this project's git repository**

```bash
git clone https://github.com/mendelbrot/tokui.git
```

**4. run the development server**

```bash
cd ./tokui
npm install
npm run dev
```

## architecture overview

**the tokui glyphs**

The glyphs are made programatically. The sub-components are created by a script at `/scripts/glyphDataBuilder.js` and pre-saved to the file `/src/data/glyphData.json` This script is run manually whenever the glyphs are modified.

To render tokui glyphs, the Editor class at `/lib/Editor.ts` reads from the glyph data file and assembles the components into complete glyphs. The glyphs are rendered as inline svg.

The Editor class has static and non-static methods. The non-static methods are for the text editor discussed below; the static draw method is for rendering text within the website. It is called as follows:

```javascript
Editor.draw(writing, settings)
```

The writing input is a string of a romanized glyph or sequence of glyphs separated by spaces. The settings is an optional input described in the file `/src/lib/editorTypes.ts`. 

The current default settings are:
```javascript
{
  fill: 'none',
  stroke: 'black',
  strokeWidth: 2,
  scale: 1.5,
  lineWrap: 8,
}
```

For inline svg, it's main use is to specify the glyph size, with the scale parameter:

```javascript
let settings = { scale: 2 }
```

**the text editor**

TODO

**the dictionary**

TODO
