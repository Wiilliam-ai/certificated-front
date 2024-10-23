import { EventView } from './event/EventView'
import { HomeView } from './home/HomeView'
import { LoginView } from './login/LoginView'
import { ModuleView } from './module/ModuleView'
import { SettingView } from './setting/SettingView'
import { StudentView } from './student/StudentView'

interface RouteApp {
  path: string
  Component: () => JSX.Element
}

export const routesApp: RouteApp[] = [
  {
    path: '/',
    Component: HomeView,
  },
  {
    path: '/event',
    Component: EventView,
  },
  {
    path: '/student',
    Component: StudentView,
  },
  {
    path: '/setting',
    Component: SettingView,
  },
  {
    path: '/module',
    Component: ModuleView,
  },
]

export const authRoutes: RouteApp[] = [
  {
    path: '/login',
    Component: LoginView,
  },
  {
    path: '/register',
    Component: () => <h1>Register</h1>,
  },
  {
    path: '/forgot-password',
    Component: () => <h1>Forgot Password</h1>,
  },
]
