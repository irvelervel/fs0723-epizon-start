import { Col, Row, Button } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartAction } from '../redux/actions'

const BookDetail = ({ bookSelected }) => {
  // useDispatch ci permette di "dispatchare" un'azione
  // ovvero di spedire un oggetto verso il reducer che, combinando la action con lo stato attuale,
  // costruirà il nuovo stato attuale per l'applicativo
  const dispatch = useDispatch()

  // leggo lo username dallo store
  const username = useSelector((state) => state.user.username) // inizialmente è stringa vuota ''

  return (
    <div className="mt-3 mb-4 mb-lg-0">
      {bookSelected ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{bookSelected.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="book-cover"
                  src={bookSelected.imageUrl}
                  alt="book selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="fw-bold">Description:</span>&nbsp;
                {bookSelected.description}
              </p>
              <p>
                <span className="fw-bold">Price:</span>&nbsp;
                {bookSelected.price}$
              </p>
              {
                // ora vorrei nascondere il tasto "Aggiungi al carrello" ad un utente
                // che non si è ancora loggato nel nostro epizon
                // controllerò il valore di state.user.username
              }
              {username ? (
                <Button
                  className="d-flex align-items-center"
                  onClick={() => {
                    // vorrei aggiungere un libro al carrello
                    console.log('AGGIUNGO LIBRO')
                    dispatch(addToCartAction(bookSelected))
                  }}
                >
                  <span className="me-2">AGGIUNGI AL</span>
                  <FaShoppingCart />
                </Button>
              ) : (
                <div>
                  <span className="not-logged-in">
                    Effettua l'accesso per aggiungere il libro al carrello!
                  </span>
                </div>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Clicca su un libro per i dettagli</h3>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default BookDetail
