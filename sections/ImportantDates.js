import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styles from '../styles/ImportantDates.module.css'

const ImportantDates = () => (
  <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='dates'/>
    <h2 className='display-4 mb-3'>Important Dates</h2>
    <Row>
      <Col className="md-6">
        <ul className={styles.timeline}>
            <ScheduleDateItem date="2023-05-08" text="Paper submission"/>
            <ScheduleDateItem date="2023-05-25" text="Reviews due date"/>
            <ScheduleDateItem date="2023-05-29" text="Author notification"/>
            <ScheduleDateItem date="2023-06-09" text="Camera-ready copies of accepted papers"/>
        </ul>
      </Col>
    </Row>
  </Container>
)

function ScheduleDateItem(props){
  const text = props.text;
  let schedule_date = new Date(props.date);

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  //actual date
  let today = new Date();

  var schedule_text;
  if (today.getTime() > schedule_date.getTime()){
    schedule_text = <del>{text}</del>;
  }
  else{
    schedule_text = text;
  }

  schedule_date = monthNames[schedule_date.getMonth()] + ' ' + schedule_date.getDate() + ', ' + schedule_date.getFullYear();

  return <li><h5>{schedule_text}</h5><h5 className="float-right">{schedule_date}</h5></li>;;
}

export default ImportantDates
