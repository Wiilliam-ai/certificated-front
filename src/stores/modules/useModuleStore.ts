import { create } from 'zustand'

export type CacheModule = {
  isFetch: boolean
  dtFin?: Date
}

export type Module = {
  id: string
  name: string
  typeModuleId: number
}

type ModuleStore = {
  cacheModules: CacheModule
  modules: Module[]
  loadModules: (modules: Module[]) => void
  addModule: (module: Module) => void
  removeModule: (module: Module) => void
  updateModule: (module: Module) => void
  setCacheModules: (cache: CacheModule) => void
}

export const useModuleStore = create<ModuleStore>((set) => ({
  modules: [],
  cacheModules: {
    isFetch: false,
  },
  loadModules: (modules) => {
    set(() => ({
      modules,
    }))
  },
  addModule: (module) => {
    set((state) => ({
      modules: [module, ...state.modules],
    }))
  },
  removeModule: (module) => {
    set((state) => ({
      modules: state.modules.filter((m) => m.id !== module.id),
    }))
  },
  updateModule: (module) => {
    set((state) => ({
      modules: state.modules.map((m) => (m.id === module.id ? module : m)),
    }))
  },
  setCacheModules: (cache) => {
    set(() => ({
      cacheModules: cache,
    }))
  },
}))
