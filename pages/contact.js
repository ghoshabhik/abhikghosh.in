import Container from "../components/Container"

export default function Contact() {
  return (
    <div className="">
      <Container
      title="Contact Page – Abhik Ghosh"
      description="The easiest way to contact me is submitting this form below, alternatively, you can write to me at the below email or dm me on LinkedIn">
        <iframe className="airtable-embed airtable-dynamic-height border rounded-lg" 
        src="https://airtable.com/embed/shreimpqukyiwrqHw?backgroundColor=purple" 
        frameBorder="0"  
        width="100%" height="794" 
        style={{background: 'transparent', border: '1px solid #ccc'}}
        >

        </iframe>
      </Container>
    </div>
  )
}
