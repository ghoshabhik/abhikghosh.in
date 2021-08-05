import Link from "next/link"
import Container from "../components/Container"
import ProfileLinks from "../components/ProfileLinks"


export default function Home() {


  return (
      <Container
      title="Home for Personal Website/ Developer Portfolio – Abhik Ghosh">
        <div className="h-36"  id="hero"></div>
        <div className="flex flex-col space-y-5 w-full   xl:w-3/5 mx-auto">
          <p className="md:text-4xl text-3xl font-semibold tracking-tight inline">Hey, I&apos;m Abhik Ghosh</p>
          <p>You have found my personal slice on internet. I am a Data Solution Architect, currently working at Tata Consultancy Services in Mumbai
            as an Associate Consultant.
          </p>
          <p>I <Link href="/article" passHref ><a className="text-websitedark-orange font-semibold"> write </a></Link> about latest technologies, development and about some how-tos to help the developer community around the world.
            I also talk on Data Engineering groups and meetups. I have a deep passion towards clean code and efficient design techniques.
          </p>
          <p>I&apos;m from a city called Kolkata, in the eastern part of India. My love for programming begun at an early age with <a className="text-websitedark-orange font-semibold" href="https://en.wikipedia.org/wiki/Antitrust_(film)" target="_blank"
                rel="noreferrer"
                >Antitrust</a>, a childhood movie. Fascinated with Milo&apos;s character, I kept spending hours on computer - turned out, I was mostly playing games though.
                Real learning started in my GWBasic, QBasic classes. Then things became serious! However, I always get excited about the idea to solve world&apos;s biggest problems from the corner of a garage :) 
          </p>

          <p>
            While you are here, please check-out  
            <Link href="/resume" passHref ><a className="text-websitedark-orange font-semibold"> My Resume page </a></Link> 
          for more about me. Also, drop in to say hi on my <Link href="/contact" passHref ><a className="text-websitedark-orange font-semibold"> Contact Page </a></Link> or on my <a href="https://www.linkedin.com/in/abhik-ghosh/" target="_blank" rel="noreferrer" className="text-websitedark-orange font-semibold"> LinkedIn Profile.</a>
          </p>
          <div><ProfileLinks /></div>
        </div>
      </Container>
  )
}

