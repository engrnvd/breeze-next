'use server'

import { auth } from '@/auth'

export async function apiFetch(uri: string, config: RequestInit = {}) {
  const url = process.env.BACKEND_URL + uri
  const session = await auth()
  const headers: HeadersInit = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...config.headers,
    Authorization: session?.access_token ? `Bearer ${session?.access_token}` : '',
  }
  config = { headers, ...config }

  const res = await fetch(url, config)
  return await res.json()
}
