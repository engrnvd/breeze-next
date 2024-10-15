import { auth } from '@/auth'

export async function apiFetch(uri: string, config: RequestInit) {
  const url = process.env.BACKEND_URL + uri
  config = config || {}
  const headers = new Headers(config.headers || {})
  headers.set('Accept', 'application/json')
  headers.set('Content-Type', 'application/json')

  const session = await auth()
  if (session?.user?.token) {
    headers.set('Authorization', `Bearer ${session?.user?.token}`)
  }

  config.headers = headers

  const res = await fetch(url, config)
  return await res.json()
}
