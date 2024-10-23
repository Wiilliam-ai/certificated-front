import { Route, Switch, useLocation } from 'wouter'
import { Layout } from '../layouts/Layout'
import { NotFoundView } from './not-found/NotFoundView'
import { usePathname } from 'wouter/use-browser-location'
import { authRoutes, routesApp } from './routes'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../stores/auth/useAuthStore'
import { AppLoader } from '../components/layouts/AppLoader'
import { ApiFetch } from '../plugins/http/api-fetch'
import { UserModel } from '../models'

export const App = () => {
  const [loading, setLoading] = useState(true)
  const [, navigate] = useLocation()
  const { auth, token, logoutAuth, verifyAuth } = useAuthStore((state) => state)

  const pathname = usePathname()
  const routeIsNotFound = routesApp.every((route) => route.path !== pathname)
  // const adminRoutes = routesApp.map((route) => route.path).includes(pathname)
  const loginRoutes = authRoutes.map((route) => route.path).includes(pathname)

  const isAuth = auth && token

  useEffect(() => {
    const fetchAuth = async () => {
      if (!isAuth) {
        navigate('/login')
        setLoading(false)
      }

      if (isAuth) {
        const http = new ApiFetch({ token })
        const userModel = new UserModel(http)

        const result = await userModel.verifyAuth({
          logout: () => {
            logoutAuth()
            navigate('/login')
            setLoading(false)
          },
        })

        if (!result || !result.data) {
          logoutAuth()
          navigate('/login')
          setLoading(false)
        }

        if (loginRoutes) {
          navigate('/')
        }

        if (result && result.data) {
          const { data } = result
          verifyAuth(data.user)
        }

        setLoading(false)
      }

      setLoading(false)
    }

    fetchAuth()
  }, [
    isAuth,
    navigate,
    token,
    routeIsNotFound,
    loginRoutes,
    logoutAuth,
    verifyAuth,
  ])

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
