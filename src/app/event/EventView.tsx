import { useModal } from '../../components/custom/modal/hooks/useModal'
import { Button } from '../../components/ui/Button'
import { FormEvent } from './components/FormEvent'

export const EventView = () => {
  const { openModal } = useModal()

  const handleCreateEvent = () => {
    openModal({
      title: 'Agregar Evento',
      widthDimension: 50,
      component: <FormEvent />,
    })
  }

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto space-y-3">
      <section>
        <h1 className="title-section">Eventos</h1>
      </section>

      <Button
        variant="primary"
        label="Agregar Evento"
        icon="plus"
        onClick={handleCreateEvent}
      />
    </div>
  )
}
