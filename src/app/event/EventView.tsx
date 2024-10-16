import { useModal } from '../../components/custom/modal/hooks/useModal'
import { Button } from '../../components/ui/Button'

export const EventView = () => {
  const { openModal } = useModal()

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto space-y-3">
      <section>
        <h1 className="title-section">Eventos</h1>
      </section>

      <Button
        variant="primay"
        label="Agregar Evento"
        icon="plus"
        onClick={() => {
          openModal({
            title: 'Agregar Evento',
            widthDimension: 50,
            component: (
              <div>
                <p>Hola mundo</p>
              </div>
            ),
          })
        }}
      />
    </div>
  )
}
