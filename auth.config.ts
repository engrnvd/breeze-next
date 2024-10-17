import type { NextAuthConfig } from 'next-auth'

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
        token.access_token = user.token
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token?.id as string
      session.access_token = token?.access_token as string
      return session
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig
