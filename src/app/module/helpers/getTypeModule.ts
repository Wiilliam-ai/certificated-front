import { typesModules } from './typesModules'

export const getTypeModule = (type: number) => {
  const module = typesModules.find((module) => module.id === type)
  return module ? module.name : 'No encontrado'
}
