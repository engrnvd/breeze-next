import AuthForm from '@/app/(auth)/AuthForm'

export default function Page() {
  return (
    <div className="page">
      <AuthForm
        title="Forgot Password"
        subTitle="Forgot your password? No problem. Just let us know your email
                address and we will email you a password reset link that
                will allow you to choose a new one."
        role="forgot-password"
      />
    </div>
  )
}
