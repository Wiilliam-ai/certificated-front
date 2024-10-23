import { IResponseAuth } from '../interfaces/auth.interface'
import { HttpAdapter } from '../plugins/http/http-adapter'

export interface User {
  id: string
  name: string
  email: string
  password: string
}

export class UserModel {
  constructor(private readonly http: HttpAdapter) {}

  async login(user: Omit<User, 'id' | 'name'>) {
    const result = await this.http.post<IResponseAuth>('/auth/login', {
      email: user.email,
      password: user.password,
    })
    return result
  }

  async register(user: User) {
    const result = await this.http.post<User>('/register', {
      name: user.name,
      email: user.email,
      password: user.password,
    })
    return result
  }
}
