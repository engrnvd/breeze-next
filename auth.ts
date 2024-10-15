import { authConfig } from '@/auth.config'
import { apiFetch } from '@/lib/fetch'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const res = await apiFetch('login', {
          method: 'POST',
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        })
        console.log('res', res)

        if (!res.user || !res.token) return null

        return { ...res.user, token: res.token }
      },
    }),
  ],
})
