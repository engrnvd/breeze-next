'use client'

import { loginAction } from '@/actions/auth-actions'
import FieldErrors from '@/components/common/FieldErrors'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LoaderCircle } from 'lucide-react'
import { HTMLAttributes, useActionState } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string,
  subTitle: string,
  role: 'login' | 'register' | 'forgot-password' | 'reset-password',
}

export default function AuthForm(
  {
    title,
    subTitle,
    role,
  }: Props
) {
  // const action = useMemo(() => {
  //   switch (role) {
  //     case 'register':
  //       return signupAction
  //     case 'login':
  //       return loginAction
  //     case 'forgot-password':
  //       return signupAction
  //     case 'reset-password':
  //       return signupAction
  //   }
  // }, [role])
  const [state, formAction, loading] = useActionState(loginAction, null)

  return (
    <div className="mx-auto max-w-sm space-y-6 py-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-500 dark:text-gray-400">{subTitle}</p>
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
          <Input defaultValue={state?.values?.email} id="email" name="email" required type="email"/>
          <FieldErrors errors={state?.errors?.email}/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" required type="password"/>
          <FieldErrors errors={state?.errors?.password}/>
        </div>
        {
          role === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="password">Confirm Password</Label>
              <Input id="password_confirmation" name="password_confirmation" required type="password"/>
            </div>
          )
        }

        {
          !state?.errors && state?.message && <FieldErrors errors={[state?.message]}/>
        }

        <Button className="w-full" type="submit" disabled={loading}>
          {loading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin"/>}
          {title}
        </Button>
      </form>
      <div className="text-center">
        {
          role !== 'login' && (
            <a href="/login" className="text-sm text-primary hover:text-primary-dark">
              Already have an account? Log in
            </a>
          )
        }
        {
          role !== 'register' && (
            <a href="/register" className="text-sm text-primary hover:text-primary-dark">
              Don&#39;t have an account yet? Sign up
            </a>
          )
        }
      </div>
    </div>
  )
}
