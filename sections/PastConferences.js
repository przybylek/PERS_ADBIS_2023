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
  <Container className="bg-white section p-4 my-5">
    <a className='target' id='conferences'/>
    <h2 className='display-4 anchor mb-3'>Past Workshops</h2>
    <ListGroup variant='flush' >
      <ListGroup.Item><h4>1st Workshop on Personalization and Recommender Systems (<a href='https://fedcsis.org/2022/pers/'>PeRS@FedCSIS'22</a>):</h4>
        <ListGroup variant='flush'>
        <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Regular papers: <a href='https://annals-csis.org/Volume_30/'>https://annals-csis.org/Volume_30/</a></ListGroup.Item>
        <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Communication papers: <a href='https://annals-csis.org/Volume_32/'>https://annals-csis.org/Volume_32/</a></ListGroup.Item>
        <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Position papers: <a href='https://annals-csis.org/Volume_31/'>https://annals-csis.org/Volume_31/</a></ListGroup.Item>
      </ListGroup>
    </ListGroup.Item>	
    </ListGroup>
  </Container>
)

export default PastConferences
