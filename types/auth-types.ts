export type AuthState = {
  message: string,
  errors?: {
    email?: string[],
    name?: string[],
    password?: string[],
  },
  values?: {
    email?: string,
    name?: string,
  }
} | null

export type User = {
  email: string,
  name?: string,
  password?: string,
}
