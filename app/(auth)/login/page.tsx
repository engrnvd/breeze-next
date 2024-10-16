import AuthForm from '@/app/(auth)/AuthForm'

export default function Page() {
  return (
    <div className="page">
      <AuthForm
        title="Login"
        subTitle="Enter your credentials to sign in"
        role="login"
      />
    </div>
  )
}
