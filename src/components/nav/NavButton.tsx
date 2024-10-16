'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

type Props = {
  href?: string
  onClick?: () => void
  imgSrc: string
  imgAlt: string
}

function NavButton(props: Props) {
  const router = useRouter()

  const onClick = () => {
    if (props.onClick) {
      props.onClick()
    } else if (props.href) {
      router.push(props.href)
    }
  }

  return (
    <div className="border-2 rounded-lg bg-opacity-90  bg-white hover:bg-emerald-200 ml-4 z-20">
      <button onClick={onClick}>
        <Image
          className="opacity-50 rounded-lg"
          src={props.imgSrc}
          alt={props.imgAlt}
          width="64"
          height="64"
        />
      </button>
    </div>
  )
}

export default NavButton
