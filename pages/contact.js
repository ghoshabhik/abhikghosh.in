import Container from "../components/Container"
import ContactAirtableForm from "../components/ContactAirtableForm"

export default function Contact() {
  return (
    <div className="">
      <Container
      title="Contact Page – Abhik Ghosh"
      description="The easiest way to contact me is submitting this form below, alternatively, you can write to me at the below email or dm me on LinkedIn">
       <div className="h-36"></div>
        <ContactAirtableForm />
      </Container>
    </div>
  )
}
