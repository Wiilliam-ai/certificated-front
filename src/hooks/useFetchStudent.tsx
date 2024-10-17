import { useQuery } from '@tanstack/react-query'
import { ApiFetch } from '../plugins/http/api-fetch'
import { useEffect } from 'react'
import { StudentModel } from '../models/StudentModel'
import { useStudentStore } from '../stores/students/useStudentStore'

export const useFetchStudent = () => {
  const apiFetch = new ApiFetch()
  const moduleModel = new StudentModel(apiFetch)

  const { students, loadStudents } = useStudentStore((state) => state)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['students'],
    staleTime: 1000 * 60 * 5,
    queryFn: () => moduleModel.loadStudents(),
  })

  useEffect(() => {
    if (data) {
      loadStudents(data)
    }
  }, [data, loadStudents])

  return { students, isLoading, isError }
}
