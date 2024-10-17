import { create } from 'zustand'

export type Module = {
  id: string
  name: string
  type: number
}

type ModuleStore = {
  modules: Module[]
  loadModules: (modules: Module[]) => void
  addModule: (module: Module) => void
  removeModule: (module: Module) => void
  updateModule: (module: Module) => void
}

export const useModuleStore = create<ModuleStore>((set) => ({
  modules: [],
  loadModules: (modules) => {
    set(() => ({ modules }))
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
}))
