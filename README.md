# tokui

this is a react app for experimenting with my constructing language and writing system.  The first thing i'm doing is learning how to dynamically generate inline svg elements to render the written characters.  I'm starting by reading this article:

https://medium.com/trbl/representing-dynamic-data-using-react-and-svg-part-one-84c8ed1737c7

ok.  the character is an svg that is composed of several polylines.  I'll make the character a component called a Glyp, and added like this:
```
<Glyph letters="kui">
```

the Glyph component will have some logic that gets the correct polylines for each of the letters and puts them all into the svg.

