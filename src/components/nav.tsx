'use client'

import Link from 'next/link'
import navItems from '@/data/nav-items'
import { usePathname } from 'next/navigation'

const Nav = () => {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-50 bg-white py-4 border-b-2 mb-4">
      {navItems.map((item) => (
        <Link
          href={item.url}
          key={item.url}
          className={
            pathname === item.url ? 'text-gray-500 mr-4' : 'text-blue-500 mr-4'
          }
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default Nav
