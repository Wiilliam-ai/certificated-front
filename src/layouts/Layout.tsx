import {
  BoxesIcon,
  GraduationCapIcon,
  SettingsIcon,
  TicketXIcon,
  UniversityIcon,
} from 'lucide-react'
import { Link } from 'wouter'
import { usePathname } from 'wouter/use-browser-location'
import { ModalComponent } from '../components/custom/modal/ModalComponent'
import { ModalProvider } from '../components/custom/modal/provider/ModalProvider'

const navItems = [
  { name: 'Module', path: '/module', Icon: BoxesIcon },
  { name: 'Student', path: '/student', Icon: GraduationCapIcon },
  { name: 'Home', path: '/', Icon: UniversityIcon },
  { name: 'Event', path: '/event', Icon: TicketXIcon },
  { name: 'Setting', path: '/setting', Icon: SettingsIcon },
]

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: Props) => {
  const pathname = usePathname()

  console.log({ pathname })
  return (
    <ModalProvider>
      <nav className="shadow-md h-20 bg-white sticky top-0 left-0">
        <ul className="flex justify-center gap-4 h-full items-center">
          {navItems.map(({ name, path, Icon }) => (
            <li
              key={path}
              className={`${pathname === path ? 'text-blue-500 bg-gray-200 rounded-full' : 'text-gray-500'}`}
            >
              <Link
                href={path}
                className="flex items-center justify-center gap-1 h-full px-4 hover:text-blue-500"
              >
                <Icon size={25} />
                <span className="hidden sm:block">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className="p-4">{children}</main>
      <ModalComponent />
    </ModalProvider>
  )
}
