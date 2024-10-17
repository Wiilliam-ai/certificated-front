import { ISettingConfig, Section } from '../SettingView'

interface Props {
  listSettings: ISettingConfig[]
  onChangeSection: (section: Section) => void
}
export const AsideSettings = ({ listSettings, onChangeSection }: Props) => {
  return (
    <div
      className="flex md:flex-col gap-2 overflow-y-scroll w-full py-3 md:py-2"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#d4d4d4 #f5f5f5',
      }}
    >
      {listSettings.map(({ Icon, title, section, active }, index) => (
        <div
          key={index}
          className={`p-3 rounded-xl flex items-center gap-2 w-full min-w-max md:min-w-min group transition-all cursor-pointer hover:bg-sky-700 hover:text-white
          ${active ? 'bg-sky-700 text-white' : 'bg-white'} shadow-md
            `}
          onClick={() => onChangeSection(section)}
        >
          <Icon className="size-5 md:size-7" />
          <p className="text-sm md:text-lg">{title}</p>
        </div>
      ))}
    </div>
  )
}
