import { useLocation } from 'wouter'
import { Button } from '../../../components/ui/Button'
import { CardItem } from './CardItem'

export const SectionTallers = () => {
  const [, navigate] = useLocation()

  const handleNavigate = () => {
    navigate('/event')
  }

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
      <Button
        className="block mx-auto my-2"
        label="Ver todos los talleres"
        variant="primary"
        onClick={handleNavigate}
      />
    </section>
  )
}
