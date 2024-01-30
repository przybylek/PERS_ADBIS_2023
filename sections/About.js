import Container from 'react-bootstrap/Container'

const About = () => (
  <Container className="bg-white section p-4 mb-5 rounded">
    <a className='target' id='about'/>
    <h2 className="display-4 anchor mb-3">About</h2>
    <p>Recommender systems are present in our everyday lives when we read news, log in to social media, or buy something in an e-shop. Therefore, it is not surprising that this domain is receiving more and more attention from researchers in academia as well as industry practitioners. However, the way in which they approach the same problem differs significantly.</p>
    <p>User Modelling is somehow related to Recommender Systems, as it enables personalization, which is an essential aspect of novel recommendation techniques. Nonetheless, it is a broader topic that also encompasses user representation, personalized search, adaptive educational systems, and intelligent user interfaces.</p>
    <p>The workshop on <strong>Personalization and Recommender Systems (PeRS)</strong> was founded in 2022 as a part of the FedCSIS multiconference. In 2023, PeRS joins ADBIS with the aim to extend the state-of-the-art in User Modelling and Recommender Systems by providing a platform where industry practitioners and academic researchers can meet and learn from each other.</p>
  </Container>
)

export default About




