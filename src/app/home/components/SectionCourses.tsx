import { Button } from '../../../components/ui/Button'
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
      <Button
        className="mx-auto mt-4"
        label="Ver todos los cursos"
        variant="primary"
        onClick={() => {}}
      />
    </section>
  )
}
