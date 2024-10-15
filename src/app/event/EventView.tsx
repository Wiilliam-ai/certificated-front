import { PlusIcon } from 'lucide-react'

export const EventView = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-3">
      <section>
        <h1 className="title-section">Eventos</h1>
      </section>

      <button className="bg-sky-700 flex text-white py-1 px-3 rounded-md my-2 transition-all hover:bg-sky-950 hover:shadow-md">
        <PlusIcon className="mr-1" />
        <span>Agregar Evento</span>
      </button>
    </div>
  )
}