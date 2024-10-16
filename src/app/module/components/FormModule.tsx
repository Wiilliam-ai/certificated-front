import { useState } from 'react'

const tyesModules = [
  {
    id: 0,
    name: 'Seleccionar',
  },
  {
    id: 1,
    name: 'Curso',
  },
  {
    id: 2,
    name: 'Taller',
  },
  {
    id: 3,
    name: 'Webinar',
  },
]

interface IModuleState {
  type: number
  name: string
}

const INITIAL_STATE: IModuleState = {
  type: 0,
  name: '',
}

interface Props {
  module?: IModuleState
}

export const FormModule = ({ module }: Props) => {
  const [state, setState] = useState<IModuleState>(module || INITIAL_STATE)

  const { name, type } = state

  return (
    <div>
      <form>
        <div>
          <label htmlFor="">Tipo de Modulo</label>
          <select
            className="block w-full p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={type}
            onChange={(e) => {
              const value = Number(e.target.value)
              setState({
                ...state,
                type: value,
              })
            }}
          >
            {tyesModules.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Nombre</label>
          <input
            className="block w-full p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            placeholder="Nombre del modulo"
            name="name"
            value={name}
            onChange={(e) => {
              const value = e.target.value
              setState({
                ...state,
                name: value,
              })
            }}
          />
        </div>
      </form>
    </div>
  )
}
