import { useState } from 'react'
import { useFetchModules } from '../../../hooks/useFetchModules'
import { tyesModules } from '../../module/helpers/typesModules'

export const FormEvent = () => {
  const { modules } = useFetchModules()

  const [selectType, setSelectType] = useState(0)

  const subModules = modules?.filter((module) => module.type === selectType)

  const openSubModules = selectType !== 0

  return (
    <div>
      <form>
        <div>
          <label htmlFor="typeModule">Seleccione el tipo de modulo</label>
          <select
            id="typeModule"
            className="form-select block w-full mt-1 p-2 rounded-lg"
            name="module"
            value={selectType}
            onChange={(e) => setSelectType(Number(e.target.value))}
          >
            {tyesModules.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        {openSubModules && (
          <div>
            <label htmlFor="subModule">Seleccione el submodulo</label>
            <select
              id="subModule"
              className="form-select block w-full mt-1 p-2 rounded-lg"
              name="subModule"
            >
              <option value="0">Seleccionar</option>
              {subModules?.map((subModule) => (
                <option key={subModule.id} value={subModule.id}>
                  {subModule.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </form>
    </div>
  )
}
