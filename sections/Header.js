import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

const Header = () => (
  <Jumbotron className='px-2 mb-5 pt-5' style={{backgroundColor: '#f0f0f5'}}>
    <a className='target' id='home'/>
    <Container className="px-0 py-1">
      <div className="row align-items-center">
        <div className="col-md-6">
		      <Image src="/Barcelona.jpg" alt='Barcelona' fluid />
        </div>
        <div className="col-md-6">
          <h1 className='h1 text-center anchor font-weight-bold'>PeRS@<a className='u' href='https://www.essi.upc.edu/dtim/ADBIS2023/'>ADBIS'23</a></h1>
          <h2 className='text-center h3 py-3'>2nd Workshop on <strong>Personalization and Recommender Systems</strong></h2>
          <h2 className='text-center h4 pb-3'><small>at the 27th European Conference on Advances in Databases and Information Systems</small></h2>
          <h4 className='text-center h5'>September 4, 2023</h4>
          <h4 className='text-center h5'>Barcelona, Spain</h4>
        </div>
        </div>
    </Container>

  </Jumbotron>
)

export default Header
