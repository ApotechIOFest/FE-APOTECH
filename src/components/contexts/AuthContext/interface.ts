export interface User {
  email: string
  name: string
  phone: string
  birth_date: string
  address: string
  medical_description: string
  is_active: boolean
  is_admin: boolean
}

export interface Jwt{
  refresh : string
  access : string
}

export interface IAuthContext {
  jwt: Jwt
  setJwt: React.Dispatch<any>
  user: User
  setUser: React.Dispatch<any>
}
