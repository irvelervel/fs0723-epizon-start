import { Button, Form, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
// per LEGGERE un valore dal Redux Store è necessario importare l'hook useSelector
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { resetCart, setUsernameAction } from '../redux/actions'

const CartIndicator = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('') // salvo COMUNQUE il valore dell'input in uno stato locale
  const dispatch = useDispatch()

  // questo componente deve mostrare la lunghezza dell'array content dentro il sotto-oggetto cart
  // come etichetta del bottone (non uno 0 fisso!)
  const buttonLabel = useSelector((state) => {
    // a partire da state, l'oggetto globale dello store, ritorno quello che mi serve
    return state.cart.content.length // all'inizio sarà sempre e comunque 0, come prima, ma ora è collegato
    // dinamicamente alla lunghezza dell'array del carrello
  })
  // FORMA ABBREVIATA:
  // const buttonLabel = useSelector((state) => state.cart.content.length)

  // altro useSelector per controllare se l'utente è loggato
  // se lo è, verrà mostrato il bottone con la lunghezza del carrello (che funge anche da link a /cart)
  // altrimenti verrà proposto un input per fare il login
  const username = useSelector((state) => state.user.username) // stringa vuota '' all'inizio

  const handleSubmit = (e) => {
    e.preventDefault()
    // ora dobbiamo "dispatchare" un'action che porterà al reducer il nostro username, per salvarlo nella slice "user"
    dispatch(setUsernameAction(inputValue))
    setInputValue('') // svuotiamo l'input
  }

  return (
    <div className="d-flex justify-content-end my-4">
      {username ? (
        <div className="d-flex align-items-center">
          <span className="me-2">Ciao, {username}!</span>
          <Button
            onClick={() => navigate('/cart')}
            className="d-flex align-items-center"
          >
            <FaShoppingCart />
            <span className="ms-2">{buttonLabel}</span>
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(setUsernameAction('')) // svuotiamo lo username nello store
              dispatch(resetCart()) // resettiamo il carrello nuovamente a []
            }}
          >
            ESCI
          </Button>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Inserisci username"
              aria-label="Inserisci username"
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="submit" variant="outline-primary">
              VAI
            </Button>
          </InputGroup>
        </Form>
      )}
    </div>
  )
}

export default CartIndicator
