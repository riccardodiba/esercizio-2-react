
import { Card, Col, Row, Container } from 'react-bootstrap'
import horror from '../data/horror.json'

const MyBook = () => {


  return (
    <Container>
    <Row className='g-3'>
      {horror.map((book) => {
        
        return (
          <Col xs={12} md={4} lg={2} key={book.asin}>
            <Card style ={{width :"10rem"}} className='mt-4'>
              <Card.Img variant="top" src={book.img} style ={{height :"230px"}} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <p>${book.price}</p>
                <h4>{book.category}</h4>
              </Card.Body>
            </Card>
          </Col> 
        
        )
      })}
    </Row>
    </Container>
  )
}

export default MyBook;