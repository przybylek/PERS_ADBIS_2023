import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

const Topics = () => (
  <Container className="section p-4 bg-white my-5 rounded">
    <a className='target' id='topics'/>
    <h2 className="display-4 anchor mb-3">Topics of Interest</h2>

<ListGroup variant='flush' >
  <ListGroup.Item><h3>Personalization</h3>
    <ListGroup variant='flush'>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>User Profiles</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Ontology-based user models</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Personalized systems</ListGroup.Item>
    </ListGroup>
  </ListGroup.Item>	
  <ListGroup.Item><h3>Recommender Systems approaches</h3>
    <ListGroup variant='flush'>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Collaborative Recommender Systems</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Semantic-based Recommender Systems</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Context-aware Recommender Systems</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Cross-domain Recommender Systems</ListGroup.Item>
    </ListGroup>
  </ListGroup.Item>	
  <ListGroup.Item><h3>Machine Learning techniques for Recommender Systems</h3>
    <ListGroup variant='flush'>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Association Rules</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Clustering methods</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Neural Networks</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Deep Learning</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Reinforcement Learning</ListGroup.Item>
    </ListGroup>
  </ListGroup.Item>	
  <ListGroup.Item><h3>Applicationa of Recommender Systems methods</h3>
    <ListGroup variant='flush'>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>News recommendations</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Tourism recommendations</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Fashion recommendations</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Podcasts recommendations</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Medical recommendations</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Other domain-specific recommenders</ListGroup.Item>
    </ListGroup>
  </ListGroup.Item>	
  <ListGroup.Item><h3>Evaluation of Recommender Systems</h3>
    <ListGroup variant='flush'>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Metrics</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Evaluation studies</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Reproducibility of existing methods</ListGroup.Item>
      <ListGroup.Item className="border-0"><i className="far fa-check-square text-primary mr-3"/>Case studies of real-world implementations</ListGroup.Item>
    </ListGroup>
  </ListGroup.Item>	
</ListGroup>

  </Container>
)


export default Topics




