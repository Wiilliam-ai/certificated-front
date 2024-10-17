import { useState } from 'react'
import { tyesModules } from '../helpers/typesModules'
import { Button } from '../../../components/ui/Button'
import { ModuleModel } from '../../../models/ModuleModel'
import { ApiFetch } from '../../../plugins/http/api-fetch'
import { useModuleStore } from '../../../stores/modules/useModuleStore'
import { useModal } from '../../../components/custom/modal/hooks/useModal'

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

const apiFetch = new ApiFetch()
const moduleModel = new ModuleModel(apiFetch)

export const FormModule = ({ module }: Props) => {
  const { closeModal } = useModal()
  const [state, setState] = useState<IModuleState>(module || INITIAL_STATE)
  const { addModule, updateModule } = useModuleStore((state) => state)
  const { name, type } = state
  const formIsCreate = state.id === ''
  const txtButton = formIsCreate ? 'Guardar' : 'Editar'

  const handleAddModule = async () => {
    const result = await moduleModel.saveModule({
      name,
      type,
    })
    addModule(result)
  }

  const handleEditModule = async () => {
    const result = await moduleModel.updateModule(state)
    updateModule(result)
  }

  const handleSubmmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formIsCreate) {
      handleAddModule()
    } else {
      handleEditModule()
    }

    closeModal()
  }

  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleSubmmit}>
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
        <div>
          <Button
            variant="primay"
            type="submit"
            label={txtButton}
            onClick={() => {}}
          />
        </div>
      </form>
    </div>
  )
}
