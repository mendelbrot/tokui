import NavButton from '@/components/nav/NavButton'
import NavContainer from '@/components/nav/NavContainer'
import Link from 'next/link'

const navItems = [
  {
    url: '/docs/sounds-writing-system',
    label: 'sounds and writing system',
  },
  {
    url: '/docs/toki-pona-words-grammar',
    label: 'Toki Pona words and grammar',
  },
  {
    url: '/docs/semantic-roles',
    label: 'semantic role grammar',
  },
  {
    url: '/docs/math',
    label: 'numbers and math',
  },
]

const navItems2 = [
  {
    url: '/words',
    label: 'searchable dictionary',
  },
  {
    url: '/editor',
    label: 'text editor',
  },
]

function Docs() {
  return (
    <div>
      <NavContainer>
        <NavButton href="/" imgAlt="home" imgSrc="/icons/tomo.svg" />
      </NavContainer>
      <div className="prose">
        <h1>tokui documentation</h1>
        <p>
          A collection of learning resources and writing about the development
          of tokui:
        </p>
        <ul>
          {navItems.map((item) => (
            <li key={item.url}>
              <Link href={item.url} key={item.url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p>
          Other tokui resources on this website:
        </p>
        <ul>
          {navItems2.map((item) => (
            <li key={item.url}>
              <Link href={item.url} key={item.url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* <li>
            <a href="https://ithkuil.net/newithkuil_04_case.htm">
              The Ithkuil cases
            </a>
          </li>
          <li>
            <a href="https://ithkuil.net/newithkuil_03_morphology.htm">
              Ithkuil configuration, affiliation, and extension
            </a>
          </li>
          <li>
            <a href="https://youtu.be/qID2B4MK7Y0">A base six number system</a>
          </li> */}
      </div>
    </div>
  )
}

export default Docs
