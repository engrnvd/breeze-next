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
  const data = {
    name: formData.get('name')?.toString(),
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
    password_confirmation: formData.get('password_confirmation')?.toString(),
  }
  try {
    const res = await apiFetch('api/register', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    if (res.errors) return { ...res, values: data }

    return logUserIn(formData)
  } catch (err) {
    return {
      message: err?.message || 'Something went wrong.',
      values: data,
    }
  }
}

export async function logoutAction(formData: FormData) {
  // todo: logout from laravel server
  await signOut()
}
