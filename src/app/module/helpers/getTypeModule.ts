import { tyesModules } from './typesModules'

export const getTypeModule = (type: number) => {
  const module = tyesModules.find((module) => module.id === type)
  return module ? module.name : 'No encontrado'
}
