export interface User {
  _id?: number,
  firstname?: string,
  lastname?: string,
  email: string,
  password: string
  passwordConfirm?: string
}
