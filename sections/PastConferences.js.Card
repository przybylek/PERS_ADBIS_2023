import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const conferences = [
  {
    title: "PeRS@FedCSIS'22",
    location: "Sofia",
    website: "https://fedcsis.org/2022/pers/",
    proceedings_regular: "https://annals-csis.org/Volume_30/",
    proceedings_communication: "https://annals-csis.org/Volume_32/",
    proceedings_position: "https://annals-csis.org/Volume_31/"
  },
]


const PastConferences = () => (
  <Container fluid="md" className='section pb-5 px-4 mt-5'>

    <a className='target' id='conferences'/>
    <h2 className="display-4 anchor mb-3">Past Workshops</h2>    
    <Row className="justify-content-md-center m-1">
      {conferences.map(c => (
      <Col key={c.title} md='auto' className="m-2">
        <Card style={{ width: '16rem' }} className="mx-auto">
          <Card.Header><a href={c.website} className='text-body'>{c.title}</a> ({c.location})</Card.Header>
          <Card.Body>
            <Card.Link href={c.proceedings_regular} className="ml-2 badge badge-light text-primary">Regular papers</Card.Link>
            <Card.Link href={c.proceedings_communication} className="ml-2 badge badge-light text-primary">Communication papers</Card.Link>
            <Card.Link href={c.proceedings_position} className="ml-2 badge badge-light text-primary">Position papers</Card.Link>
          </Card.Body>          
        </Card>
      </Col>
      ))}
    </Row>
  </Container>
)

export default PastConferences
