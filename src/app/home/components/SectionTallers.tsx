import { CardItem } from './CardItem'

export const SectionTallers = () => {
  return (
    <section>
      <h1 className="title-section">Talleres</h1>
      <p className="paragraph">Talleres de la escuela</p>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
        <CardItem
          title="Taller de Canto"
          description="Aprende a cantar con los mejores profesionales"
        />
        <CardItem
          title="Taller de Guitarra"
          description="Aprende a tocar guitarra con los mejores profesionales"
        />
        <CardItem
          title="Taller de Batería"
          description="Aprende a tocar batería con los mejores profesionales"
        />
        <CardItem
          title="Taller de Piano"
          description="Aprende a tocar piano con los mejores profesionales"
        />
      </div>
      <button className="bg-sky-700 text-white py-1 px-3 rounded-md block mx-auto my-2 transition-all hover:bg-sky-950 hover:shadow-md">
        Ver todos los talleres
      </button>
    </section>
  )
}
