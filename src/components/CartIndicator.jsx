import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
// per LEGGERE un valore dal Redux Store è necessario importare l'hook useSelector
import { useSelector } from 'react-redux'

const CartIndicator = () => {
  const navigate = useNavigate()

  // questo componente deve mostrare la lunghezza dell'array content dentro il sotto-oggetto cart
  // come etichetta del bottone (non uno 0 fisso!)
  const buttonLabel = useSelector((state) => {
    // a partire da state, l'oggetto globale dello store, ritorno quello che mi serve
    return state.cart.content.length // all'inizio sarà sempre e comunque 0, come prima, ma ora è collegato
    // dinamicamente alla lunghezza dell'array del carrello
  })
  // FORMA ABBREVIATA:
  // const buttonLabel = useSelector((state) => state.cart.content.length)

  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        onClick={() => navigate('/cart')}
        className="d-flex align-items-center"
      >
        <FaShoppingCart />
        <span className="ms-2">{buttonLabel}</span>
      </Button>
    </div>
  )
}

export default CartIndicator
