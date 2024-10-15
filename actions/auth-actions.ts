import { signIn } from '@/auth'
import axios from '@/lib/axios'
import { AuthState } from '@/types/auth-types'

const csrf = () => axios.get('/sanctum/csrf-cookie')

export async function loginAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  let state: AuthState = null
  await csrf()
  await axios.post('login', {
    email: formData.get('email'),
    password: formData.get('password'),
  }).then((res) => {
    console.log('res', res)
    // window.location.href = '/dashboard'
  }).catch((err) => {
    state = {
      message: err.response?.data?.message || err.message,
      errors: err.response?.data?.errors,
      values: { email: formData.get('email')?.toString() },
    }
    console.error('error', err.response?.data || err)
  })

  return state
}

export async function signupAction(prevState: AuthState, formData: FormData): Promise<AuthState> {
  let error = null
  await csrf()
  await axios.post('register', {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    password_confirmation: formData.get('password_confirmation'),
  }).then((res) => {
    // todo: sign in
    console.log('res', res)
    signIn('credentials', { redirectTo: '/dashboard' })
  }).catch((err) => {
    error = err.response?.data || err.message || err
    console.error('error', err)
  })

  return error
}
