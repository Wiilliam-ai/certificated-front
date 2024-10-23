import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type User = {
  id: string
  name: string
  email: string
}

export type AuthStore = {
  auth: boolean
  token?: string
  user?: User
  loginAuth: (user: User, token: string) => void
  logoutAuth: () => void
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
    }),
    { name: 'auth' },
  ),
)
