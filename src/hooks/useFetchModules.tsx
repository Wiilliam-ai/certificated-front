import { useQuery } from '@tanstack/react-query'
import { useModuleStore } from '../stores/modules/useModuleStore'
import { ApiFetch } from '../plugins/http/api-fetch'
import { ModuleModel } from '../models/ModuleModel'
import { useEffect } from 'react'

export const useFetchModules = () => {
  const apiFetch = new ApiFetch()
  const moduleModel = new ModuleModel(apiFetch)

  const { modules, loadModules } = useModuleStore((state) => state)

  const { data } = useQuery({
    queryKey: ['modules'],
    staleTime: 1000 * 60 * 5,
    queryFn: () => moduleModel.loadModules(),
  })

  useEffect(() => {
    if (data) {
      loadModules(data)
    }
  }, [data, loadModules])

  return { modules }
}
