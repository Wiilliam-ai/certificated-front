import { CardItem } from './CardItem'

export const SectionCourses = () => {
  return (
    <section>
      <h1 className="title-section">Cursos</h1>
      <p className="paragraph">Cursos con los que cuentas</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CardItem
          title="Curso de JavaScript"
          description="Aprende JavaScript desde cero"
        />
        <CardItem
          title="Curso de TypeScript"
          description="Aprende TypeScript desde cero"
        />
        <CardItem
          title="Curso de React"
          description="Aprende React desde cero"
        />
      </div>

      <button className="bg-sky-700 text-white py-1 px-3 rounded-md block mx-auto my-2 transition-all hover:bg-sky-950 hover:shadow-md">
        Ver todos los cursos
      </button>
    </section>
  )
}
