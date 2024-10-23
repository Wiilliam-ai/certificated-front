export interface IResponseAuth {
  user: IUser
  token: string
}

export interface IUser {
  id: string
  name: string
  email: string
  avatar: IAvatar
  role: IRole
}

export interface IAvatar {
  id: string
  url: string
}

export interface IRole {
  id: string
  doUser: boolean
  doAdmin: boolean
  doDevelop: boolean
}
