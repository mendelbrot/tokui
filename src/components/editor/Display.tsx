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
    <div
      style={{ display: 'grid' }}
    >
      <div style={{ gridColumn: '1', gridRow: '1' }}>
        {glyphSvg && <div dangerouslySetInnerHTML={{ __html: glyphSvg }} />}
      </div>
      <div style={{ gridColumn: '1', gridRow: '1' }}>
        {cursorMap.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-row items-start"
            style={{ height: glyphSize }}
          >
            {row.map((_item, colIndex) => {
              let itemClass: string | undefined = undefined
              if (
                cursorPosition &&
                cursorPosition[0] === rowIndex &&
                cursorPosition[1] === colIndex
              ) {
                itemClass = 'border-2 border-red-500 border-dashed'
              } else if (gridMode) {
                itemClass = 'border-b border-r border-blue-400'
                if (
                  rowIndex === 0 ||
                  cursorMap[rowIndex - 1].length - 1 < colIndex
                ) {
                  itemClass += ' border-t'
                }
                if (colIndex === 0) {
                  itemClass += ' border-l'
                }
              }
              return (
                <div
                  key={colIndex}
                  className={itemClass}
                  style={{ width: glyphSize, height: glyphSize }}
                  onClick={() => moveTo([rowIndex, colIndex])}
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
