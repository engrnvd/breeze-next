'use client'

import { forgotPasswordAction, loginAction, resetPasswordAction, signupAction } from '@/actions/auth-actions'
import FieldErrors from '@/components/common/FieldErrors'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  useSearchParams
} from '@/node_modules/.pnpm/next@15.0.0-canary.146_react-dom@19.0.0-rc-f38c22b244-20240704_react@19.0.0-rc-f38c22b244-202_mqjcyflrduuilb3pxyrrcenf3y/node_modules/next/dist/client/components/navigation'
import { LoaderCircle } from 'lucide-react'
import Link from 'next/link'
import { HTMLAttributes, useActionState, useMemo } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string,
  subTitle: string,
  role: 'login' | 'register' | 'forgot-password' | 'reset-password',
  email?: string,
  token?: string,
}

export default function AuthForm(
  {
    title,
    subTitle,
    role,
    email,
    token,
  }: Props
) {
  const action = useMemo(() => {
    switch (role) {
      case 'register':
        return signupAction
      case 'login':
        return loginAction
      case 'forgot-password':
        return forgotPasswordAction
      case 'reset-password':
        return resetPasswordAction.bind(null, token || '')
    }
  }, [role, token])
  const [state, formAction, loading] = useActionState(action, null)
  const searchParams = useSearchParams()
  const reset = searchParams.get('reset')

  return (
    <div className="mx-auto max-w-sm space-y-6 py-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500 text-sm">{subTitle}</p>
        {
          reset && <p className="text-green-600 text-sm">{reset}</p>
        }
      </div>
      <form action={formAction} className="space-y-4">
        {role === 'register' && (
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input defaultValue={state?.values?.name} id="name" name="name" required/>
            <FieldErrors errors={state?.errors?.name}/>
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input defaultValue={email || state?.values?.email} id="email" name="email" required type="email"/>
          <FieldErrors errors={state?.errors?.email}/>
        </div>
        {
          role !== 'forgot-password' && (
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input defaultValue={state?.values?.password} id="password" name="password" required type="password"/>
              <FieldErrors errors={state?.errors?.password}/>
            </div>
          )
        }
        {
          ['register', 'reset-password'].includes(role) && (
            <div className="space-y-2">
              <Label htmlFor="password">Confirm Password</Label>
              <Input defaultValue={state?.values?.password_confirmation} id="password_confirmation"
                     name="password_confirmation" required type="password"/>
            </div>
          )
        }

        {
          !state?.errors && state?.message && state.status !== 'success' && <FieldErrors errors={[state?.message]}/>
        }
        {
          state?.message && state?.status === 'success' && (
            <div className="text-green-600 text-sm">{state.message}</div>
          )
        }

        <Button className="w-full" type="submit" disabled={loading}>
          {loading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin"/>}
          {title}
        </Button>
      </form>

      <div className="text-center space-y-4 flex flex-col">
        {
          role !== 'login' && (
            <Link href="/login" className="text-sm text-primary hover:text-primary-dark">
              {role === 'register' ? 'Already have an account? Log in' : 'Back to login'}
            </Link>
          )
        }
        {
          role === 'login' && (
            <Link href="/forgot-password" className="text-sm text-primary hover:text-primary-dark">
              Forgot your password?
            </Link>
          )
        }
        {
          !['register', 'forgot-password'].includes(role) && (
            <Button asChild variant="outline">
              <Link className="text-sm text-primary hover:text-primary-dark" href="/register">
                Don&#39;t have an account yet? Sign up
              </Link>
            </Button>
          )
        }
      </div>
    </div>
  )
}
