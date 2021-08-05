import Link from 'next/link'


export default function Home() {
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
    </div>
    )
  }
  