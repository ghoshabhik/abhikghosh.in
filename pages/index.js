import CurrentlyListening from "../components/CurrentlyListening"
import CurrentlyReading from "../components/CurrentlyReading"
import Tweets from "../components/Tweets"
import Instagram from "../components/Instagram"
import ProfileLinks from "../components/ProfileLinks"
import Container from "../components/Container"
import Activities from "../components/Activities"

export default function Home() {
  return (
    <div className="">
      <Container
      title="Home for Personal Website/ Developer Portfolio – Abhik Ghosh">
        Index
        <div className="grid xl:grid-cols-3 grid-cols-1 gap-2">
        <div className="xl:col-span-2 h-96">Blog and Project Section</div>
        <Activities />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 mb-3">
          <CurrentlyListening />
          <CurrentlyReading />
        </div>
        
        <Tweets />
        <Instagram />
        <ProfileLinks />
        
      </Container>
    </div>
  )
}
