import { create } from 'zustand'

export type Student = {
  id: string
  name: string
  image: string
  phone: string
  email: string
}

type StudentStore = {
  students: Student[]
  loadStudents: (students: Student[]) => void
  addStudent: (module: Student) => void
  removeStudent: (module: Student) => void
  updateStudent: (module: Student) => void
}

export const useStudentStore = create<StudentStore>((set) => ({
  students: [],
  loadStudents: (students) => {
    set(() => ({ students }))
  },
  addStudent: (module) => {
    set((state) => ({
      students: [module, ...state.students],
    }))
  },
  removeStudent: (module) => {
    set((state) => ({
      students: state.students.filter((m) => m.id !== module.id),
    }))
  },
  updateStudent: (module) => {
    set((state) => ({
      students: state.students.map((m) => (m.id === module.id ? module : m)),
    }))
  },
}))
