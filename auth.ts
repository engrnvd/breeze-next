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
      authorize: async (credentials) => {
        let user = null

        // logic to salt and hash password
        const pwHash = credentials.password

        // logic to verify if the user exists
        user = await new Promise(resolve => setTimeout(() => {
          if (credentials.email === '08es34@gmail.com' && credentials.password !== '123456')
            resolve({ email: credentials.email, password: pwHash })
          else
            resolve(null)
        }, 500))

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error('User not found.')
        }

        return user
      },
    }),
  ],
})
