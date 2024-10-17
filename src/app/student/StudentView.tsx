import { useModal } from '../../components/custom/modal/hooks/useModal'
import { Button } from '../../components/ui/Button'
import { useFetchStudent } from '../../hooks/useFetchStudent'
import { CardStudent } from './components/CardStudent'

export const StudentView = () => {
  const { openModal } = useModal()

  const { students, isLoading, isError } = useFetchStudent()

  const renderStudnts = isLoading === false && isError === false

  const handleModal = () => {
    openModal({
      title: 'Agregar Nuevo Estudiante',
      widthDimension: 30,
      component: (
        <>
          <div>Form Student</div>
        </>
      ),
    })
  }

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-3">
        <section>
          <h1 className="title-section">Estudiantes</h1>
        </section>

        <Button
          variant="primay"
          label="Agregar Estudiante"
          icon="plus"
          onClick={() => {
            handleModal()
          }}
        />
      </div>

      <section className="mt-5">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {isLoading && <p>Cargando...</p>}
            {isError && <p>Error...</p>}
            {renderStudnts &&
              students.map((student) => (
                <CardStudent key={student.id} student={student} />
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
