import { toast } from 'react-toastify'
import { IResponseAuth } from '../interfaces/auth.interface'
import { HttpAdapter } from '../plugins/http/http-adapter'
import { CustomError } from '../plugins/http/api-fetch'

export interface User {
  id: string
  name: string
  email: string
  password: string
}

export class UserModel {
  constructor(private readonly http: HttpAdapter) {}

  async login(user: Omit<User, 'id' | 'name'>) {
    try {
      const result = await this.http.post<IResponseAuth>('/auth/login', {
        email: user.email,
        password: user.password,
      })
      return result
    } catch (error) {
      if (error instanceof CustomError) {
        toast.error(error.message)
      }
    }
  }

  async verifyAuth({ logout }: { logout: () => void }) {
    try {
      const result =
        await this.http.post<Omit<IResponseAuth, 'token'>>('/auth/verify')
      return result
    } catch (error) {
      if (error instanceof CustomError) {
        toast.error(error.message)
      }
      logout()
    }
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
