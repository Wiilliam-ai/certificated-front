import { Route, Switch } from 'wouter'
import { HomeView } from './home/HomeView'
import { EventView } from './event/EventView'
import { StudentView } from './student/StudentView'
import { Layout } from '../layouts/Layout'
import { SettingView } from './setting/SettingView'
import { ModuleView } from './module/ModuleView'

export const App = () => {
  return (
    <Switch>
      <Route path="/" nest>
        <Layout>
          <Route path="/">
            <HomeView />
          </Route>
          <Route path="/event">
            <EventView />
          </Route>
          <Route path="/student">
            <StudentView />
          </Route>
          <Route path="/setting">
            <SettingView />
          </Route>
          <Route path="/module">
            <ModuleView />
          </Route>
        </Layout>
      </Route>
    </Switch>
  )
}
