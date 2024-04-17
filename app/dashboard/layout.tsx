import { auth } from "@/lib/auth"
import Header from "@/components/Header"
import Setting from "@/components/Setting"
import Sidebar from "@/components/Sidebar"
import SwtichLanguage from "@/components/SwitchLanguage"
import SwitchMode from "@/components/SwitchMode"
import UserMenu from "@/components/UserMenu"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <main className='flex min-h-screen'>
      <div className='flex-1'>
        <Header>
          <SwtichLanguage />
          <SwitchMode />
          <Setting />
          <UserMenu
            user={{
              name: 'Prasanna',
              image: 'https://avatars.githubusercontent.com/u/4726921?v=4',
              email: 'prasanna@test.com',
            }}
          />
        </Header>
        <Sidebar className='fixed hidden border-r xl:flex' />

        <div className='container mt-24 pb-8 xl:pl-[256px]'>{children}</div>
      </div>
    </main>
  )
}
