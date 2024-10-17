export type AuthState = {
  status?: 'success' | 'error'
  message: string,
  errors?: {
    email?: string[],
    name?: string[],
    password?: string[],
  },
  values?: {
    email?: string,
    name?: string,
    password?: string,
    password_confirmation?: string,
  }
} | null

export type User = {
  id: number,
  email: string,
  name?: string,
  password?: string,
  email_verified_at?: string,
  created_at?: string,
  updated_at?: string,
}

declare module 'next-auth' {
  interface User {
    id?: string
    token?: string
  }

  interface Session {
    access_token?: string
  }
}
