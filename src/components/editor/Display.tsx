'use client'

import React from 'react'

type Props = {
  glyphSvg: string
  cursorPosition: number[] | null
  moveTo: (position: number[]) => void
  glyphSize: number
  cursorMap: number[][]
  gridMode: boolean
  lineWrap: number | null
}

function Display({
  glyphSvg,
  cursorMap,
  cursorPosition,
  moveTo,
  glyphSize,
  gridMode,
  lineWrap,
}: Props) {
  return (
    <div style={{ display: 'grid' }}>
      <div
        style={{
          gridColumn: '1',
          gridRow: '1',
        }}
      >
        {glyphSvg && <div dangerouslySetInnerHTML={{ __html: glyphSvg }} />}
      </div>
      <div style={{ gridColumn: '1', gridRow: '1' }}>
        <div className="flex flex-row">
          <div>
            <div className={'flex flex-row items-start'}>
              {lineWrap &&
                Array.from({ length: lineWrap }, (_item, index) => (
                  <div
                    key={index}
                    style={{
                      width: glyphSize,
                      height: 0,
                      visibility: 'hidden',
                    }}
                  />
                ))}
            </div>
            {cursorMap.map((row, Yrow) => {
              return (
                <div
                  key={Yrow}
                  className={'flex flex-row items-start'}
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
                      itemClass = 'border-b border-r border-blue-400'
                      if (Yrow === 0 || cursorMap[Yrow - 1].length - 1 < Xcol) {
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
                      >
                        {cursorMap[Yrow][Xcol]}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
          {lineWrap && <div className="border-l border-slate-700 w-2" />}
        </div>
      </div>
    </div>
  )
}

export default Display
