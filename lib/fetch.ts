'use server'

import { auth } from '@/auth'

export async function apiFetch(uri: string, config: RequestInit = {}) {
  const url = process.env.BACKEND_URL + uri
  const session = await auth()

  if (!process.env.BREEZE_NEXT_CSRF_KEY) throw new Error('BREEZE_NEXT_CSRF_KEY is missing in your .env file. Please visit https://github.com/engrnvd/laravel-breeze-next for details.')

  const headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...config.headers,
    'X-CSRF-KEY': process.env.BREEZE_NEXT_CSRF_KEY,
    Authorization: session?.access_token ? `Bearer ${session?.access_token}` : '',
  }
  config = { headers, ...config }

  const res = await fetch(url, config)
  return await res.json()
}
