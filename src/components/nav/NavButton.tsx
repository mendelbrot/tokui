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
    <button
      onClick={onClick}
      className="border-2 rounded-lg bg-opacity-70 bg-white hover:bg-emerald-200 hover:bg-opacity-70 ml-4"
    >
      <Image
        className="opacity-30 rounded-lg"
        src={props.imgSrc}
        alt={props.imgAlt}
        width="64"
        height="64"
      />
    </button>
  )
}

export default NavButton
