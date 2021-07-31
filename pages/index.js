import CurrentlyListening from "../components/CurrentlyListening"
import CurrentlyReading from "../components/CurrentlyReading"
import Container from "../components/Container"

export default function Home() {
  return (
    <div className="">
      <Container
      title="Home for Personal Website/ Developer Portfolio – Abhik Ghosh">
        Index
        <div className="flex flex-col md:flex-row md:space-x-2 ">
          <CurrentlyListening />
          <CurrentlyReading />
        </div>
      </Container>
    </div>
  )
}
