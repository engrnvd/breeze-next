import AuthForm from '@/app/(auth)/AuthForm'

export default function Page({ params, searchParams }: {
  params: { token: string },
  searchParams: { email: string },
}) {
  return (
    <div className="page">
      <AuthForm
        title="Reset Password"
        subTitle="Reset your password."
        role="reset-password"
        email={searchParams.email}
        token={params.token}
      />
    </div>
  )
}
