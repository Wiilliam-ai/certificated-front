import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IAvatar, IRole } from '../../interfaces/auth.interface'

export type User = {
  id: string
  name: string
  email: string
  avatar: IAvatar
  role?: IRole
}

export type AuthStore = {
  auth: boolean
  token?: string
  user?: User
  loginAuth: (user: User, token: string) => void
  logoutAuth: () => void
  verifyAuth: (user: User) => void
}

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      auth: false,
      loginAuth: (user, token) => {
        set(() => ({ auth: true, user, token }))
      },
      logoutAuth: () => {
        set(() => ({ auth: false, user: undefined, token: undefined }))
      },
      verifyAuth: (user) => {
        set(() => ({ auth: true, user }))
      },
    }),
    { name: 'auth' },
  ),
)
