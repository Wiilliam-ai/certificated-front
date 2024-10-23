export interface IResponseAuth {
  user: IUser
  token: string
}

interface IUser {
  id: string
  name: string
  email: string
  avatar: IAvatar
}

interface IAvatar {
  id: string
  url: string
}
