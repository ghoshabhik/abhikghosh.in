import CurrentlyListening from "../components/Spotify"
import CurrentlyReading from "../components/CurrentlyReading"
import Spotify from "../components/CurrentlyListening"
import Tweets from "../components/Tweets"
import Instagram from "../components/Instagram"
import ProfileLinks from "../components/ProfileLinks"
import Container from "../components/Container"
import Activities from "../components/Activities"
import GithubStats from '../components/GithubStats'

export default function Recents() {
  return (
    <div className="">
      <Container
      title="Home for Personal Website/ Developer Portfolio – Abhik Ghosh">
        <div className="h-36"></div>
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg py-10 px-2 md:px-10 mb-3">
        <h1 className="
            font-bold text-3xl md:text-5xl tracking-tight 
            mb-4 
            text-black dark:text-white">
              My Dashboards
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
              Here on this page, you can see things like a quick Github dashboard and few other data pulled in to a single 
              page. The songs I am listening to, the books I am reading, the recent posts on Instagrams, and activites on 
              Twitter etc. This is an experimental page to try out various api integrations and curate some meaningful 
              data story. 
        </p>
        </div>
        
        {/* <div className="grid xl:grid-cols-3 grid-cols-1 gap-2">
        <div className="xl:col-span-2 h-96">Blog and Project Section</div>

        <div>something else</div>
        </div> */}
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg py-10 px-2 md:px-10 my-3">
            <GithubStats />
            </div>
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 mb-3">
          <CurrentlyListening />
          <Spotify />
        </div>
        
        <CurrentlyReading />
        <Tweets />
        <Instagram />
        <Activities />
        
      </Container>
    </div>
  )
}
