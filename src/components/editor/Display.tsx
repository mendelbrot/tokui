'use client'

import React from 'react'

type Props = {
  glyphSvg: string
  cursorPosition: number[] | null
  moveTo: (position: number[]) => void
  glyphSize: number
  cursorMap: number[][]
  gridMode?: boolean
}

function Display({
  glyphSvg,
  cursorMap,
  cursorPosition,
  moveTo,
  glyphSize,
  gridMode,
}: Props) {
  return (
    <div style={{ display: 'grid' }}>
      <div style={{ gridColumn: '1', gridRow: '1' }}>
        {glyphSvg && <div dangerouslySetInnerHTML={{ __html: glyphSvg }} />}
      </div>
      <div style={{ gridColumn: '1', gridRow: '1' }}>
        {cursorMap.map((row, Yrow) => (
          <div
            key={Yrow}
            className="flex flex-row items-start"
            style={{ height: glyphSize }}
          >
            {row.map((_item, Xcol) => {
              let itemClass: string | undefined = undefined
              if (
                cursorPosition &&
                cursorPosition[1] === Yrow &&
                cursorPosition[0] === Xcol
              ) {
                itemClass =
                  'border-2 border-red-500 border-dashed  bg-yellow-300/10'
              } else if (gridMode) {
                itemClass =
                  'border-b border-r border-blue-400'
                if (
                  Yrow === 0 ||
                  cursorMap[Yrow - 1].length - 1 < Xcol
                ) {
                  itemClass += ' border-t'
                }
                if (Xcol === 0) {
                  itemClass += ' border-l'
                }
              }
              return (
                <div
                  key={Xcol}
                  className={itemClass}
                  style={{ width: glyphSize, height: glyphSize }}
                  onClick={() => moveTo([Xcol, Yrow])}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Display
