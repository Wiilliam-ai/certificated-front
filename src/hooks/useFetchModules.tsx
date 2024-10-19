import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Module } from '../stores/modules/useModuleStore'
import { ApiFetch } from '../plugins/http/api-fetch'
import { ModuleModel } from '../models/ModuleModel'

const apiFetch = new ApiFetch()
const moduleModel = new ModuleModel(apiFetch)

export const useFetchModules = () => {
  const queryClient = useQueryClient()
  const {
    data: modules,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['modules'],
    queryFn: () => moduleModel.loadModules(),
    staleTime: 1000 * 60 * 60, // 1 hour
  })

  const createModuleMutation = useMutation({
    mutationFn: (newModule: Module) => moduleModel.saveModule(newModule),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modules'] })
    },
  })

  const modifyModuleMutation = useMutation({
    mutationFn: (module: Module) => moduleModel.updateModule(module),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modules'] })
    },
  })

  const deleteModuleMutation = useMutation({
    mutationFn: (module: Module) => moduleModel.deleteModule(module.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['modules'] })
    },
  })

  const createModule = (module: Module) => createModuleMutation.mutate(module)
  const modifyModule = (module: Module) => modifyModuleMutation.mutate(module)

  const deleteModule = (module: Module) => deleteModuleMutation.mutate(module)

  return {
    modules,
    isLoading,
    isError,
    createModule,
    modifyModule,
    deleteModule,
  }
}
