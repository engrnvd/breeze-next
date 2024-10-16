import { auth } from '@/auth'
import ProfileDropdownItem from '@/components/app-nav/ProfileDropdownItem'
import LogoutBtn from '@/components/common/LogoutBtn'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'

export default async function ProfileDropdown() {
  const session = await auth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-lg font-black rounded-full" variant="outline" size="icon">
          {session?.user?.name ? session.user.name[0] : <PersonIcon/>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom">
        <DropdownMenuLabel>
          {session?.user?.name}
          <br/>
          <span className="font-normal text-sm text-muted-foreground">{session?.user?.email}</span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator/>

        <ProfileDropdownItem route="/dashboard" label="Dashboard"/>

        <DropdownMenuSeparator/>

        <DropdownMenuItem>
          <LogoutBtn/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
