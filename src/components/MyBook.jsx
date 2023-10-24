import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 import horror from '../data/horror.json'


 function MyBook () {
horror.map((book) => {
    return (
    <Card >
      <Card.Img  src={book.asin} />
      <Card.Body>
        <Card.Title>
            <p>{book.title}</p>
        </Card.Title>
        <Card.Text>
        <p>{book.prince}</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


    )
}

       

   

export default MyBook;
    

 



