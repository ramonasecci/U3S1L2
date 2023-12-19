import books from '../data/books.json';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';



function AllTheBooks() {

    return (
        <Container>
            <Row>
                {books.fantasy.map((book) => {
                    return (
                        <Col key={book.asin}>
                            <Card>
                                <Card.Img variant="top" src={book.img} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>
                                        <p>Categoria:{book.category}</p>
                                        <p>Prezzo:{book.price}€</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    );
}

export default AllTheBooks;