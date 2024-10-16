import { Button } from '../../components/ui/Button'
import { useModal } from '../../components/custom/modal/hooks/useModal'
import { FormModule } from './components/FormModule'

export const ModuleView = () => {
  const { openModal } = useModal()

  const handleModal = () => {
    openModal({
      title: 'Agregar Modulo',
      widthDimension: 30,
      component: <FormModule />,
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
