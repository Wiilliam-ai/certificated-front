import { useState } from 'react'
import { tyesModules } from '../helpers/typesModules'
import { Button } from '../../../components/ui/Button'
import { useModal } from '../../../components/custom/modal/hooks/useModal'
import { useFetchModules } from '../../../hooks/useFetchModules'

interface IModuleState {
  id: string
  type: number
  name: string
}

const INITIAL_STATE: IModuleState = {
  id: '',
  type: 0,
  name: '',
}

interface Props {
  module?: IModuleState
}

export const FormModule = ({ module }: Props) => {
  const { closeModal } = useModal()
  const { modifyModule, createModule } = useFetchModules()
  const [state, setState] = useState<IModuleState>(module || INITIAL_STATE)
  const { name, type } = state
  const formIsCreate = state.id === ''
  const txtButton = formIsCreate ? 'Guardar' : 'Editar'

  const handleAddModule = async () => {
    createModule(state)
  }

  const handleEditModule = async () => {
    modifyModule(state)
  }

  const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formIsCreate) {
      const values = [name, type].includes('')

      if (values) {
        return
      }
      handleAddModule()
    } else {
      const values = [name, type].includes('')

      if (values) {
        return
      }

      handleEditModule()
    }

    closeModal()
  }

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmmit}>
        <div>
          <label htmlFor="module">Tipo de Modulo</label>
          <select
            className="block w-full p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={type}
            id="module"
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
          <label htmlFor="name-module">Nombre</label>
          <input
            className="block w-full p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            placeholder="Nombre del modulo"
            id="name-module"
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
        <div>
          <Button
            variant="primary"
            type="submit"
            label={txtButton}
            onClick={() => {}}
          />
        </div>
      </form>
    </div>
  )
}
