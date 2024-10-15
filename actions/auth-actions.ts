'use server'

import { signIn, signOut } from '@/auth'
import { apiFetch } from '@/lib/fetch'
import { AuthState } from '@/types/auth-types'
import { AuthError } from 'next-auth'

export async function loginAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    console.log('error', error)
    if (error instanceof AuthError) return { message: 'Invalid credentials.' }
    return { message: 'Something went wrong.' }
  }
  return null
}

export async function signupAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  let error = null
  await apiFetch('register', {
    method: 'POST',
    body: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('password_confirmation'),
    })
  }).then((res) => {
    // todo: sign in
    console.log('res', res)
    signIn('credentials', { redirectTo: '/dashboard' })
  }).catch((err) => {
    error = err.response?.data || err.message || err
    console.error('error', err)
  })

  return error
}

export async function logoutAction(formData: FormData) {
  await signOut()
}
