import { Button, IconButton, useModal } from '../../components'
import { useFetchModules } from '../../hooks/useFetchModules'
import { Module } from '../../stores/modules/useModuleStore'
import { FormModule } from './components/FormModule'
import { ModuleSkeleton } from './components/ModuleSkeleton'
import { getTypeModule } from './helpers/getTypeModule'

export const ModuleView = () => {
  const { openModal } = useModal()
  const { modules, deleteModule, isLoading, isError } = useFetchModules()
  const noModules = !isLoading && modules?.length === 0

  const handleModal = () => {
    openModal({
      title: 'Agregar Modulo',
      widthDimension: 30,
      component: <FormModule />,
    })
  }

  const handleEdit = (module: Module) => {
    openModal({
      title: 'Editar Modulo',
      widthDimension: 30,
      component: <FormModule module={module} />,
    })
  }

  const handleDelete = async (module: Module) => {
    const isConfirm = confirm('¿Estas seguro de eliminar este modulo?')
    if (!isConfirm) return
    deleteModule(module)
  }

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-3">
        <section>
          <h1 className="title-section">Modulos</h1>
        </section>

        <Button
          variant="primary"
          label="Agregar Modulo"
          icon="plus"
          onClick={() => {
            handleModal()
          }}
        />
      </div>
      <section className="mt-4">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {isLoading && <ModuleSkeleton />}
            {noModules && (
              <div className="col-span-1 md:col-span-3 text-center border-2 p-3 rounded-md bg-stone-50 cursor-default">
                <p className="uppercase text-gray-600 font-bold">
                  No hay modulos registrados
                </p>
              </div>
            )}
            {!isLoading && !noModules && !isError && modules && (
              <>
                {modules?.map((module) => (
                  <div
                    key={module.id}
                    className="animate-fadeIn bg-white p-4 rounded-md shadow-md flex justify-between items-center"
                  >
                    <div>
                      <h1 className="text-lg font-bold text-gray-700">
                        {module.name}
                      </h1>
                      <p>
                        <strong>Tipo:</strong> {getTypeModule(module.type)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <IconButton
                        variant="primary"
                        icon="edit"
                        label="edit"
                        size="sm"
                        onClick={() => {
                          handleEdit(module)
                        }}
                      />
                      <IconButton
                        variant="destroy"
                        icon="trash"
                        label="delete"
                        size="sm"
                        onClick={() => {
                          handleDelete(module)
                        }}
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
