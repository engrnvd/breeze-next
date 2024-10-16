'use server'

import { signIn, signOut } from '@/auth'
import { apiFetch } from '@/lib/fetch'
import { AuthState } from '@/types/auth-types'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'

async function logUserIn(formData: FormData) {
  try {
    await signIn('credentials', formData)
  } catch (error) {
    if (error instanceof AuthError) return {
      message: 'Invalid credentials.',
      values: { email: formData.get('email')?.toString() }
    }

    // todo: remove this conditional when next v15 and next-auth v5 are stable
    if (error?.toString().includes('NEXT_REDIRECT')) {
      redirect('/dashboard')
    }

    return { message: 'Something went wrong.' + error }
  }

  return null
}

export async function loginAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  return logUserIn(formData)
}

export async function signupAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  let error = null
  try {
    const res = await apiFetch('register', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        password_confirmation: formData.get('password_confirmation'),
      })
    })

    console.log('res', res)
    return logUserIn(formData)
  } catch (err) {
    // error = err.response?.data || err.message || err
    console.error('error', err)
  }

  return error
}

export async function logoutAction(formData: FormData) {
  await signOut()
}
