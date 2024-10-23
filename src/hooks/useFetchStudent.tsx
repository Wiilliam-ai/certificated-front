import { useQuery } from '@tanstack/react-query'
import { ApiFetch } from '../plugins/http/api-fetch'
import { StudentModel } from '../models/StudentModel'
import { useStudentStore } from '../stores/students/useStudentStore'
import { useAuthStore } from '../stores/auth/useAuthStore'

export const useFetchStudent = () => {
  const token = useAuthStore((state) => state.token)
  const apiFetch = new ApiFetch({ token: token || '' })
  const moduleModel = new StudentModel(apiFetch)

  const { students, loadStudents } = useStudentStore((state) => state)

  const { isLoading, isError } = useQuery({
    queryKey: ['students'],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const results = await moduleModel.loadStudents()
      loadStudents(results)
      return results
    },
  })

  return { students, isLoading, isError }
}
