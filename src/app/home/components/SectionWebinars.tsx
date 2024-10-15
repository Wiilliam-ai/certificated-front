import { CardItem } from './CardItem'

export const SectionWebinars = () => {
  return (
    <section>
      <h1 className="title-section">Webinars</h1>
      <p className="paragraph">
        Bienvenido a los webinars de desarrollo personal
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardItem
          title="Webinar de Finanzas Personales"
          description="Aprende a manejar tus finanzas personales"
        />

        <CardItem
          title="Webinar de Salud Mental"
          description="Aprende a cuidar tu salud mental"
        />

        <CardItem
          title="Webinar de Productividad"
          description="Aprende a ser más productivo"
        />

        <CardItem
          title="Webinar de Liderazgo"
          description="Aprende a liderar"
        />
      </div>
      <button className="bg-sky-700 text-white py-1 px-3 rounded-md block mx-auto my-2 transition-all hover:bg-sky-950 hover:shadow-md">
        Ver todos los webinars
      </button>
    </section>
  )
}
