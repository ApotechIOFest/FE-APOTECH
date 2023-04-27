import { ILoginData, IRegisterData } from './interface'

export const EMPTY_LOGIN_DATA: ILoginData = {
  email: '',
  password: '',
}

export const EMPTY_REGISTER_DATA: IRegisterData = {
  email: '',
  name: '',
  phone: '',
  birth_date: '',
  address: '',
  medical_description: '',
  password: '',
  password2: '',
}
