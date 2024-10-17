import { useState } from 'react'
import { AsideSettings } from './components/AsideSettings'
import {
  CircleUser,
  UserIcon,
  BellIcon,
  Building2,
  TrainFrontIcon,
  LucideProps,
} from 'lucide-react'

export type Section =
  | 'profile-section'
  | 'account-section'
  | 'notifications-section'
  | 'entities-section'
  | 'instructors-section'

export interface ISettingConfig {
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  title: string
  active: boolean
  section: Section
}

const listSettings: ISettingConfig[] = [
  {
    Icon: UserIcon,
    title: 'Perfil',
    active: true,
    section: 'profile-section',
  },
  {
    Icon: CircleUser,
    title: 'Cuentas',
    active: false,
    section: 'account-section',
  },
  {
    Icon: BellIcon,
    title: 'Notificaciones',
    active: false,
    section: 'notifications-section',
  },
  {
    Icon: Building2,
    title: 'Entidades',
    active: false,
    section: 'entities-section',
  },
  {
    Icon: TrainFrontIcon,
    title: 'Instructores',
    active: false,
    section: 'instructors-section',
  },
]

export const SettingView = () => {
  const [settingSection, setSettingSection] =
    useState<ISettingConfig[]>(listSettings)

  const settinSelected = settingSection.filter((item) => item.active)[0]

  const handleChangeSection = (section: Section) => {
    // si es el mismo section no hagas nada
    if (settinSelected.section === section) return
    const newSettings = settingSection.map((item) => {
      if (item.section === section) {
        return { ...item, active: true }
      }
      return { ...item, active: false }
    })
    setSettingSection(newSettings)
  }

  return (
    <div className="animate-fadeIn">
      <div className="max-w-7xl mx-auto space-y-3">
        <section>
          <h1 className="title-section">Configuración</h1>
        </section>

        <section className="flex gap-4 flex-col md:flex-row">
          <aside className="w-full md:max-w-60 h-max">
            <AsideSettings
              listSettings={settingSection}
              onChangeSection={handleChangeSection}
            />
          </aside>
          <div className="w-full h-max py-2">
            {settinSelected.section === 'profile-section' && (
              <p className="animate-fadeIn bg-white p-3">Perfil section</p>
            )}
            {settinSelected.section === 'account-section' && (
              <p className="animate-fadeIn bg-white p-3">Cuentas section</p>
            )}
            {settinSelected.section === 'notifications-section' && (
              <p className="animate-fadeIn bg-white p-3">
                Notificaciones section
              </p>
            )}
            {settinSelected.section === 'entities-section' && (
              <p className="animate-fadeIn bg-white p-3">Entidades section</p>
            )}
            {settinSelected.section === 'instructors-section' && (
              <p className="animate-fadeIn bg-white p-3">
                Instructores section
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
