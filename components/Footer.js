import Link from 'next/link'

import { useUser } from '../lib/auth/useUser'


export default function Footer() {

    const { user, logout } = useUser()

    // console.log(user)

    return (
    <div className="
    dark:bg-gray-900 
    text-gray-300
    dark:text-gray-600
    py-5
    text-center">
        <div>&copy; Abhik Ghosh | Created with NextJs and Firebase. Hosted on Vercel ✌️</div>   
        <div className="flex flex-row space-x-5 justify-center">
            <Link href="/" passHref><a>Home</a></Link>
            <Link href="/resume" passHref><a>Resume</a></Link>
            <Link href="/snippet" passHref><a>Snippets</a></Link>
            <Link href="/article" passHref><a>Articles</a></Link>
            <Link href="/recents" passHref><a>Dash</a></Link>
        </div>
        <div className="flex flex-row space-x-5 justify-center">
        
        {user ? 
                    <>
                    <Link href='/admin' passHref>
                    <a className="cursor-pointer">Admin</a>
                    </Link>
                    <div className="" onClick={() => logout()}>
                        <a className="inline cursor-pointer">Logout</a>
                    </div>
                    </>
                 :
                
                    <Link href='/auth' passHref>
                        <a className="cursor-pointer">Admin</a>
                    </Link>
                
        }
        </div>
    </div>
    )
  }
  