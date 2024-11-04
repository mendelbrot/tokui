import NavButton from '@/components/nav/NavButton'
import NavContainer from '@/components/nav/NavContainer'
import React from 'react'

type Props = { children: React.ReactNode }

function DocLayout({ children }: Props) {
  return (
    <div>
      <NavContainer>
        <NavButton href="/" imgAlt="home" imgSrc="/icons/tomo.svg" />
        <NavButton
          href="/docs"
          imgSrc="/icons/up.svg"
          imgAlt="back to docs index page"
        />
      </NavContainer>
      {children}
    </div>
  )
}

export default DocLayout
