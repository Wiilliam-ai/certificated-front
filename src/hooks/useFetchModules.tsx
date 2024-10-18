import { Module, useModuleStore } from '../stores/modules/useModuleStore'
import { ApiFetch } from '../plugins/http/api-fetch'
import { ModuleModel } from '../models/ModuleModel'
import { useEffect, useState } from 'react'

const apiFetch = new ApiFetch()
const moduleModel = new ModuleModel(apiFetch)

export const useFetchModules = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    modules,
    loadModules,
    addModule,
    updateModule,
    removeModule,
    cacheModules,
    setCacheModules,
  } = useModuleStore((state) => state)

  const { dtFin, isFetch } = cacheModules

  const fetchModules = async () => {
    setIsLoading(true)

    if (isFetch === false && dtFin === null) {
      const data = await moduleModel.loadModules()
      loadModules(data)
      setCacheModules({ isFetch: true, dtFin: new Date() })
      setIsLoading(false)
      return
    }

    if (isFetch && dtFin) {
      const diff = new Date().getTime() - dtFin.getTime()
      const diffInMinutes = diff / 60000

      if (diffInMinutes < 5) {
        setIsLoading(false)
        return
      }
    }

    const data = await moduleModel.loadModules()
    loadModules(data)
    setCacheModules({ isFetch: true, dtFin: new Date() })
    setIsLoading(false)
  }

  useEffect(() => {
    fetchModules().then()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const createModule = async (module: Module) => {
    const newModule = await moduleModel.saveModule(module)
    addModule(newModule)
  }
  const modifyModule = async (module: Module) => {
    const updatedModule = await moduleModel.updateModule(module)
    updateModule(updatedModule)
  }

  const deleteModule = async (module: Module) => {
    const deletedModule = await moduleModel.deleteModule(module.id)
    removeModule(deletedModule)
  }

  const reloadModules = async () => {
    const data = await moduleModel.loadModules()
    loadModules(data)
  }

  return {
    modules,
    isLoading,
    createModule,
    modifyModule,
    deleteModule,
    reloadModules,
  }
}
