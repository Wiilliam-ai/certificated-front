import { useState } from 'react'
import { Student } from '../../../stores/students/useStudentStore'
import { MenuComponent } from '../../../components/custom/menu/MenuComponent'

interface Props {
  student: Student
}

export const CardStudent = ({ student }: Props) => {
  const [showOptions, setShowOptions] = useState(false)
  const [positionOptions, setPositionOptions] = useState({ x: 0, y: 0 })

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowOptions(true)
    setPositionOptions({ x: e.clientX, y: e.clientY })
  }

  const handleCloseOptions = () => {
    setShowOptions(false)
  }

  return (
    <div
      className="cursor-default flex bg-white rounded-2xl items-center shadow overflow-hidden p-3 gap-3 group transition-all hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-200"
      onContextMenu={handleRightClick}
      onMouseLeave={handleCloseOptions}
    >
      <img
        className="size-16 md:size-28 object-cover rounded-full border-4 border-transparent transition-all group-hover:border-white"
        src={student.image}
        alt={student.name}
        onError={(e) => {
          e.currentTarget.src = 'https://via.placeholder.com/150'
        }}
      />
      <div>
        <h4 className="text-2xl font-bold text-gray-700 transition-all group-hover:text-white">
          {student.name}
        </h4>
        <p className="font-bold text-gray-600 transition-all group-hover:text-slate-200">
          Phone: <span className="font-normal">{student.phone}</span>{' '}
        </p>
        <p className="font-bold text-gray-600 transition-all group-hover:text-slate-200">
          Email: <span className="font-normal">{student.email}</span>{' '}
        </p>
      </div>
      {showOptions && (
        <MenuComponent
          position={{ x: positionOptions.x, y: positionOptions.y }}
          onClose={handleCloseOptions}
        >
          <div className="flex flex-col gap-2">
            <button className="text-gray-700 hover:text-sky-700">Editar</button>
            <button className="text-gray-700 hover:text-sky-700">
              Eliminar
            </button>
          </div>
        </MenuComponent>
      )}
    </div>
  )
}
