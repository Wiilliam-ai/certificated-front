import { Button } from '../../components/ui/Button'
import { useModal } from '../../components/custom/modal/hooks/useModal'

export const ModuleView = () => {
  const { openModal } = useModal()

  const handleModal = () => {
    openModal({
      title: 'Agregar Modulo',
      component: (
        <div>
          <input
            type="text"
            placeholder="Nombre del modulo"
            className="input"
          />
          <input
            type="text"
            placeholder="Descripcion del modulo (opcional)"
            className="input"
          />

          <div className="mt-3 flex justify-end">
            <Button
              variant="destroy"
              label="Cancelar"
              onClick={() =>
                openModal({ title: 'acept', component: <div>acept</div> })
              }
            />
            <Button
              variant="primay"
              label="Guardar"
              onClick={() =>
                openModal({ title: '', component: <div>Guardar</div> })
              }
            />
          </div>
        </div>
      ),
    })
  }

  return (
    <>
      <div className="animate-fadeIn max-w-7xl mx-auto space-y-3">
        <section>
          <h1 className="title-section">Modulos</h1>
        </section>

        <Button
          variant="primay"
          label="Agregar Modulo"
          icon="plus"
          onClick={() => {
            handleModal()
          }}
        />
      </div>
    </>
  )
}
