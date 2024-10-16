import ProfileBtn from '@/components/app-nav/ProfileBtn'
import AppLogoFull from '@/components/common/AppLogoFull'
import Container from '@/components/common/Container'

export default function PageNav() {
  return (
    <Container className="w-full px-4 py-3 border-b bg-background nav">
      <div className="flex justify-between items-center space-x-2">
        <AppLogoFull/>
        <ProfileBtn/>
      </div>
    </Container>
  )
}
