import { Route, Switch } from 'wouter'
import { HomeView } from './home/HomeView'
import { EventView } from './event/EventView'
import { StudentView } from './student/StudentView'
import { Layout } from '../layouts/Layout'
import { SettingView } from './setting/SettingView'
import { ModuleView } from './module/ModuleView'
import { NotFoundView } from './not-found/NotFoundView'
import { usePathname } from 'wouter/use-browser-location'

const routesApp = [
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

export const App = () => {
  const pathname = usePathname()

  const routeIsNotFound = routesApp.every((route) => route.path !== pathname)

  return (
    <Switch>
      <Layout>
        <>
          {routesApp.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} />
          ))}
        </>

        {routeIsNotFound ? <Route component={NotFoundView} /> : <Route />}
      </Layout>
    </Switch>
  )
}
