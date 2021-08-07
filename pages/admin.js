import Container from "../components/Container"

import { useUser } from '../lib/auth/useUser'
import AdminSection from "../components/AdminSection"

export default function Admin() {

  const { user, logout } = useUser()

    // console.log(user)

  return (
    <div className="">
      <Container
      title="Admin Page – Abhik Ghosh"
      description="The easiest way to contact me is submitting this form below, alternatively, you can write to me at the below email or dm me on LinkedIn">
       <div className="h-20 xl:h-36"></div>

       <div className="flex flex-col space-y-5 w-full  mx-auto">
        {user && user.email === 'avik5324@gmail.com' ? <AdminSection user={user}/> : 
        <div className="w-full  bg-gray-200 dark:bg-gray-700 border rounded-lg px-10 py-10 text-center
        font-extrabold my-20
        flex flex-col justify-center items-center">
          <p className="my-20 "><svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 17h-8v-6h8v6zm-6-6v-2c0-1.104.897-2 2-2s2 .896 2 2v2h1v-2c0-1.656-1.343-3-3-3s-3 1.344-3 3v2h1z"/></svg></p>
          <p className="xl:w-3/5">This page is only authorized to Admin Users! Please contact abhik.ghosh5@gmail.com for any question</p>
          </div>
          }
        </div>
      </Container>
    </div>
  )
}
