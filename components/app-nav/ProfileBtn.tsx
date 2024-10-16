import { auth } from '@/auth'
import GuestProfileBtn from '@/components/app-nav/GuestProfileBtn'
import ProfileDropdown from '@/components/app-nav/ProfileDropdown'

export default async function ProfileBtn() {
  const session = await auth()

  if (!session) return <GuestProfileBtn/>

  return <ProfileDropdown/>
}
