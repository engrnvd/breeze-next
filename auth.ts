import axios from '@/lib/axios'
import { User } from '@/types/auth-types'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // E.g., domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async () => {
        const response: { data: User } = await axios.get('/api/user')
        console.log('response', response)
        return response.data
      },
    }),
  ],
  pages: {
    signIn: '/login',
  }
})
