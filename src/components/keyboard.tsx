'use client'

import React from 'react'
import draw from '@/lib/draw'

type Props = {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}

function keyboard({ text, setText }: Props) {
  const appendSequence = (s: string) => {
    setText(text + s)
  }

  const backspace = () => {
    if (text.endsWith('_ ')) {
      setText(text.slice(0, -2))
    } else {
      setText(text.slice(0, -1))
    }
  }

  return (
    <div>
      <div className="grid sm:grid-cols-10 grid-cols-6 gap-2 overflow-x-auto">
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />

        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />

        <div
          className="flex items-center justify-center border-2 rounded-md border-black w-12 h-12"
          onClick={() => appendSequence('e')}
          dangerouslySetInnerHTML={{ __html: draw('e') }}
        />
        <div
          className="flex items-center justify-center border-2 rounded-md border-black w-12 h-12"
          dangerouslySetInnerHTML={{ __html: draw('e') }}
        />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />
        <div dangerouslySetInnerHTML={{ __html: draw('e') }} />

        <div
          className="flex items-center justify-center border-2 rounded-md border-black w-12 h-12"
          onClick={() => appendSequence(' #')}
          dangerouslySetInnerHTML={{ __html: '#' }}
        />
        <div
          className="sm:col-span-2 flex items-center justify-center border-2 rounded-md border-black h-12"
          onClick={() => appendSequence(' _ ')}
          dangerouslySetInnerHTML={{ __html: 'space' }}
        />
        <div
          className="sm:col-span-4 col-span-2 flex items-center justify-center border-2 rounded-md border-black h-12"
          onClick={() => appendSequence(' ')}
          dangerouslySetInnerHTML={{ __html: 'next word' }}
        />
        <div
          className="sm:col-span-2  flex items-center justify-center border-2 rounded-md border-black h-12"
          onClick={() => appendSequence('\n')}
          dangerouslySetInnerHTML={{ __html: 'return' }}
        />
        <div
          className="flex items-center justify-center border-2 rounded-md border-black w-12 h-12"
          onClick={backspace}
          dangerouslySetInnerHTML={{ __html: 'bks' }}
        />
      </div>
    </div>
  )
}

export default keyboard
