import { Button, IconButton, useModal } from '../../components'
import { FormEvent } from './components/FormEvent'

export const EventView = () => {
  const { openModal } = useModal()

  const handleCreateEvent = () => {
    openModal({
      title: 'Agregar Evento',
      widthDimension: 35,
      component: <FormEvent />,
    })
  }

  const handleEditEvent = () => {
    openModal({
      title: 'Editar Evento',
      widthDimension: 20,
      component: <> Hola </>,
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

      <IconButton
        icon="edit"
        variant="destroy"
        size="md"
        label="Editar"
        onClick={handleEditEvent}
      />
    </div>
  )
}
