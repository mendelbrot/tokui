'use client'

import Editor from '@/lib/Editor'
import { CursorPosition, WritingRep } from '@/lib/EditorTypes'
import React from 'react'

type Props = {
  writingSvg: string
  cursorPosition: CursorPosition | null
  moveTo: Editor['cursor']['moveTo']
  glyphSize: number
  writingRep: WritingRep
  gridMode: boolean
  lineWrap: number | null
  displayHeight: number | undefined
}

function Display({
  writingSvg,
  writingRep,
  cursorPosition,
  moveTo,
  glyphSize,
  gridMode,
  lineWrap,
  displayHeight,
}: Props) {
  return (
    <div style={{ display: 'grid' }}>
      <div
        style={{
          gridColumn: '1',
          gridRow: '1',
        }}
      >
        {writingSvg && <div dangerouslySetInnerHTML={{ __html: writingSvg }} />}
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
            {writingRep.map((row, Yrow) => {
              return (
                <div
                  key={Yrow}
                  className={'flex flex-row items-start'}
                  style={{ height: glyphSize }}
                >
                  {row.map((item, Xcol) => {
                    let itemClass: string | undefined = undefined
                    if (
                      cursorPosition &&
                      cursorPosition[1] === Yrow &&
                      cursorPosition[0] === Xcol
                    ) {
                      itemClass = 'border-2 border-amber-500'
                    } else if (gridMode) {
                      itemClass = 'border-b border-r border-blue-400'
                      if (
                        Yrow === 0 ||
                        writingRep[Yrow - 1].length - 1 < Xcol
                      ) {
                        itemClass += ' border-t'
                      }
                      if (Xcol === 0) {
                        itemClass += ' border-l'
                      }
                    }

                    if (item.ponaMode) {
                      itemClass += ' bg-lime-300/30'
                    }

                    return (
                      <div
                        key={Xcol}
                        className={itemClass}
                        style={{ width: glyphSize, height: glyphSize }}
                        onClick={() => {
                          if (cursorPosition) moveTo([Xcol, Yrow]).project()
                        }}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>
          {lineWrap && (
            <div
              className="border-l border-slate-700 w-2"
              style={{ minHeight: displayHeight }}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Display
