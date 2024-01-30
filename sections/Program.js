import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Clock from 'react-live-clock'

const Program = () => (
    <Container className="bg-white section p-4 rounded">
    <a className='target' id='program'/>
    <h2 className='display-4 anchor mb-3'>Program</h2>



    <Table bordered className="mt-5">
      <tbody>	

        <tr className='text-center table-primary'><th>Monday, Sept. 4th 2023 (A4206)</th><th>session chair: Olga Cherednichenko</th></tr>
        <tr><td className='text-nowrap'>14:00 - 14:10</td><td><a href='/PeRS_2023.pdf' target="_blank" rel="noopener noreferrer">Workshop opening</a> (<em>Adam Przybyłek</em>)</td></tr>

        <tr><td className='text-nowrap'>14:10 - 14:30</td><td>A Recommendation System for Personalized Daily Life Services to Promote Frailty Prevention (<em>Ghassen Frikha, Xavier Lorca, Herve Pingaud, Adel Taweel, Christophe Bortolaso, Katarzyna Borgiel and Elyes Lamine</em>)</td></tr>
        <tr><td className='text-nowrap'>14:30 - 14:45</td><td>Design-focused Development of a Course Recommender System for Digital Study Planning (<em>Michaela Ochs, Tobias Hirmer, Katherina Past and Andreas Henrich</em>)</td></tr>
        <tr><td className='text-nowrap'>14:45 - 15:00</td><td>Systematic Literature Review on Click Through Rate Prediction (<em>Paulina Leszczełowska, Maria Bollin and Marcin Grabski</em>)</td></tr>        


        <tr><th className='text-center table-secondary' colSpan={2}></th></tr>

        <tr className='text-center table-primary'><th>Monday, Sept. 4th 2023 (A4206)</th><th>session chair: Ghassen Frikha</th></tr>
        <tr><td className='text-nowrap'>16:00 - 16:20</td><td>Overcoming the Cold-Start Problem in Recommendation Systems with Ontologies and Knowledge Graphs (<em>Stanislav Kuznetsov and Pavel Kordik</em>)</td></tr>
        <tr><td className='text-nowrap'>16:20 - 16:35</td><td>Recommender Chatbot as a Tool for Collaborative Business Intelligence in Tourism Domain (<em>Olga Cherednichenko and Fahad Muhammad</em>)</td></tr>
        <tr><td className='text-nowrap'>16:35 - 16:50</td><td>Neural Graph Collaborative Filtering: analysis of possibilities on diverse datasets (<em>Dariusz Kobiela, Jan Groth, Michał Sieczczyński, Rafał Wolniak and Krzysztof Pastuszak</em>)</td></tr>
        <tr><td className='text-nowrap'>16:50 - 17:05</td><td>Performance and reproducibility of BERT4Rec on Netflix Price Dataset (<em>Aleksandra Gałka, Jan Grubba and Krzysztof Walentukiewicz</em>)</td></tr>

      </tbody>
    </Table>
  </Container>
)

export default Program


