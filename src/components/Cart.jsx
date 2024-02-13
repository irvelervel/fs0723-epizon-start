import { Col, Row, Button } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCartAction } from '../redux/actions'

const Cart = () => {
  // qui dentro uso useSelector per recuperare di nuovo l'array di film
  const cart = useSelector((state) => state.cart.content)
  const dispatch = useDispatch()
  const availableBooks = useSelector((state) => state.book.available) // lista dei libri in stock

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {cart.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  console.log('ELIMINO IL LIBRO')
                  dispatch(deleteFromCartAction(i)) // passo all'action creator l'indice del libro da rimuovere
                }}
              >
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="fw-bold mb-3 ms-4">
          TOTALE:{' '}
          {cart.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
          $
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="fw-bold mb-3 ms-4">
          Totale libri disponibili: {availableBooks.length}
        </Col>
      </Row>
    </Row>
  )
}

export default Cart
