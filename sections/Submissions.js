import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Submissions = () => (
  <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='submissions'/>
    <h2 className='display-4 anchor mb-3'>Submissions</h2>
    <p>
      We invite research papers in two categories: full papers (up to 12 pages), and short/demo papers (up to 8 pages). Papers must be in English and present original, not already published research. Authors should consult Springer's authors' guidelines and use their proceedings templates, either for LaTeX (prefered) or for Word, for the preparation of their papers: <br />

      <a href="https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines">https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines</a>
    </p>
    <p>
      Springer encourages authors to include their ORCIDs in their papers. In addition, the corresponding author of each paper, acting on behalf of all of the authors of that paper, must complete and sign a Consent-to-Publish form. The corresponding author signing the copyright form should match the corresponding author marked on the paper. Once the files have been sent to Springer, changes relating to the authorship of the papers cannot be made.
    </p>
    <p>Papers should be submitted in PDF format using the EasyChair Conference System. After the paper submission has been successfully completed, authors will receive an automatic confirmation e-mail.
    </p>
      <Row className="justify-content-center my-3">
        <Button className="btn-lg" href='https://easychair.org/conferences/?conf=pers2023'>Submit a paper</Button>
      </Row>

    <p>Accepted papers will be published by Springer in Communications in Computer and Information Science (CCIS). CCIS volumes are made available to the following indexing services: Web of Science; Scopus, EI Engineering Index; ACM Digital Library; DBLP; Google Scholar.</p>
    <p>The present registry of conferences maintained by Polish Ministry of Education and Science assigns 70 points to ADBIS as well as its workshop publications.</p>
    <p>
      An extended version of the best papers will be forwarded for further procedure in <em>Computer Science and Information Systems</em> (<a href="http://www.comsis.org">ComSIS</a>, IF: 1.167).
    </p>


  </Container>
)

export default Submissions

