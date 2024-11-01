import { HttpAdapter } from '../plugins/http/http-adapter'
import { Module } from '../stores/modules/useModuleStore'

export class ModuleModel {
  constructor(private readonly http: HttpAdapter) {}

  async loadModules() {
    const result = await this.http.get<Module[]>('/modules')
    return result.data
  }

  async saveModule(module: Module) {
    const result = await this.http.post<Module>('/modules', {
      name: module.name,
      typeModuleId: module.typeModuleId,
    })
    return result
  }

  async updateModule(module: Module) {
    const result = await this.http.patch<Module>(`/modules/${module.id}`, {
      name: module.name,
      typeModuleId: module.typeModuleId,
    })
    return result
  }

  async deleteModule(id: string) {
    const result = await this.http.delete<Module>(`/modules/${id}`)
    return result
  }
}
