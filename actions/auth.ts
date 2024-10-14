import axios from '@/lib/axios'
import { useRouter } from 'next/router'

const csrf = () => axios.get('/sanctum/csrf-cookie')

export async function signupAction(prevState: string, formData: FormData) {
  let error = ''
  await csrf()
  await axios.post('register', {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    password_confirmation: formData.get('password_confirmation'),
  }).then((res) => {
    // todo: sign in
    const router = useRouter()
    router.push('/dashboard')
  }).catch((err) => {
    error = err.response?.data || err.message || err
    console.error('error', err)
  })

  return error
}
