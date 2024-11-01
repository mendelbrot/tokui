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
    <div className="border-2 rounded-lg bg-opacity-95 shadow-2xl bg-emerald-50 hover:bg-emerald-200 ml-4 z-20">
      <button onClick={onClick} className="">
        <Image
          className="opacity-50 rounded-lg m-0"
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
