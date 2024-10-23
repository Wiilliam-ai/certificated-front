import { Route, Switch, useLocation } from 'wouter'
import { Layout } from '../layouts/Layout'
import { NotFoundView } from './not-found/NotFoundView'
import { usePathname } from 'wouter/use-browser-location'
import { authRoutes, routesApp } from './routes'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../stores/auth/useAuthStore'
import { AppLoader } from '../components/layouts/AppLoader'

export const App = () => {
  const [loading, setLoading] = useState(true)
  const [, navigate] = useLocation()
  const { auth } = useAuthStore((state) => state)
  const pathname = usePathname()
  const routeIsNotFound = routesApp.every((route) => route.path !== pathname)
  const routeSelected = routesApp.map((route) => route.path).includes(pathname)
  const loginRoute = authRoutes.map((route) => route.path).includes(pathname)

  useEffect(() => {
    console.log('auth', auth)
    setTimeout(() => {
      if (!auth && routeSelected) {
        navigate('/login')
        setLoading(false)
        return
      }

      if (auth && loginRoute) {
        navigate('/')
        setLoading(false)
        return
      }

      setLoading(false)
    }, 1000)
  }, [auth, routeSelected, loginRoute, navigate])

  if (loading) return <AppLoader />

  return (
    <Switch>
      {authRoutes.map(({ path, Component }) => (
        <Route key={path} path={path}>
          <Component />
        </Route>
      ))}

      <Layout>
        <>
          {routesApp.map(({ path, Component }) => (
            <Route key={path} path={path}>
              <Component />
            </Route>
          ))}
        </>

        {routeIsNotFound ? <Route component={NotFoundView} /> : <Route />}
      </Layout>
    </Switch>
  )
}
