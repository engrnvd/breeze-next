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

export async function forgotPasswordAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const data = { email: formData.get('email')?.toString(), }
  try {
    const res = await apiFetch('api/forgot-password', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    if (res.errors) return { ...res, values: data }

    return { message: res.status, status: 'success' }
  } catch (err) {
    return {
      message: err?.message || 'Something went wrong.',
      values: data,
    }
  }
}

export async function resetPasswordAction(token: string, prevState: AuthState, formData: FormData): Promise<AuthState> {
  const data = {
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
    password_confirmation: formData.get('password_confirmation')?.toString(),
    token,
  }

  let res
  try {
    res = await apiFetch('api/reset-password', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    if (res.errors) return { ...res, values: data }

  } catch (err) {
    return {
      message: err?.message || 'Something went wrong.',
      values: data,
    }
  }

  try {
    redirect('/login?reset=' + res?.status)
  } catch (error) {
    // todo: remove this conditional when next v15 and next-auth v5 are stable
    if (error?.toString().includes('NEXT_REDIRECT')) {
      redirect('/login?reset=' + res?.status)
    }
  }

  return null
}

export async function logoutAction(formData: FormData) {
  // todo: logout from laravel server
  await signOut()
}
