
const width = 300
const height = 300
const border = "2px solid lightgreen"
const stroke = "slategrey"
const fill = "red"

const rectStyle = {"stroke": stroke, "fill": fill}
const svgStyle = {"width": width, "height": height, "border": border}

function Glyph() {
  return (
    <div>
      <svg version="1.1" viewBox="0 0 10 10" style={svgStyle}>
        <line x1="0" y1="1" x2="10" y2="1" stroke="purple" stroke-width="0.1" />
        <line x1="0" y1="2" x2="10" y2="2" stroke="lightgreen" stroke-width="0.1" />
        <line x1="0" y1="3" x2="10" y2="3" stroke="purple" stroke-width="0.1" />
        <line x1="0" y1="4" x2="10" y2="4" stroke="lightgreen" stroke-width="0.1" />
        <line x1="0" y1="5" x2="10" y2="5" stroke="blue" stroke-width="0.1" />
        <line x1="0" y1="6" x2="10" y2="6" stroke="lightgreen" stroke-width="0.1" />
        <line x1="0" y1="7" x2="10" y2="7" stroke="purple" stroke-width="0.1" />
        <line x1="0" y1="8" x2="10" y2="8" stroke="lightgreen" stroke-width="0.1" />
        <line x1="0" y1="9" x2="10" y2="9" stroke="purple" stroke-width="0.1" />

        <line x1="1" y1="0" x2="1" y2="10" stroke="purple" stroke-width="0.1" />
        <line x1="2" y1="0" x2="2" y2="10" stroke="lightgreen" stroke-width="0.1" />
        <line x1="3" y1="0" x2="3" y2="10" stroke="purple" stroke-width="0.1" />
        <line x1="4" y1="0" x2="4" y2="10" stroke="lightgreen" stroke-width="0.1" />
        <line x1="5" y1="0" x2="5" y2="10" stroke="blue" stroke-width="0.1" />
        <line x1="6" y1="0" x2="6" y2="10" stroke="lightgreen" stroke-width="0.1" />
        <line x1="7" y1="0" x2="7" y2="10" stroke="purple" stroke-width="0.1" />
        <line x1="8" y1="0" x2="8" y2="10" stroke="lightgreen" stroke-width="0.1" />
        <line x1="9" y1="0" x2="9" y2="10" stroke="purple" stroke-width="0.1" />

        <rect x="1.25" y="0.75" width="3.5" height="0.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>
        <rect x="5.25" y="0.75" width="3.5" height="0.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>

        <rect x="0.75" y="1.25" width="0.5" height="3.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>
        <rect x="4.75" y="1.25" width="0.5" height="3.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>
        <rect x="8.75" y="1.25" width="0.5" height="3.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>

        <rect x="1.25" y="4.75" width="3.5" height="0.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>
        <rect x="5.25" y="4.75" width="3.5" height="0.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>

        <rect x="0.75" y="5.25" width="0.5" height="3.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>
        <rect x="4.75" y="5.25" width="0.5" height="3.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>
        <rect x="8.75" y="5.25" width="0.5" height="3.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>

        <rect x="1.25" y="8.75" width="3.5" height="0.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>
        <rect x="5.25" y="8.75" width="3.5" height="0.5" stroke-width="0.1" rx="0.25" style={rectStyle}/>

        <rect x="0.00" y="4.75" width="4.35" height="0.5" stroke-width="0.1" rx="0.25" style={rectStyle}
          transform-origin="center" transform="rotate(45)"
        />
      </svg>
    </div>
  );
}

export default Glyph;

// transform-box="stroke-box" 