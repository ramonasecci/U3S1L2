import React from 'react';
import { Row, Container,  } from 'react-bootstrap';
import SingleBook from './SingleBook';

class BookList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = { search: '' }
    // }

    // handleInputSearch = (valore) => {
    //     this.setState({ search: valore });
    // }

    render() {
        const {books} = this.props
        return (
            <Container>
                <Row>
                    {books.map((book) => {
                        return(
                            <SingleBook libro={book}  />
                        )
                        
                    })}
                </Row>
            </Container>
        )
    }
}

export default BookList