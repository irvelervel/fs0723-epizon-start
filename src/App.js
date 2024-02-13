import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import CartIndicator from './components/CartIndicator'
import BookStore from './components/BookStore'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { useSelector } from 'react-redux'

const App = () => {
  const isLoading = useSelector((state) => state.book.isLoading)

  return (
    <BrowserRouter>
      <Container className="epizon-container">
        <Row>
          <Col className="text-center background-div">
            <Link to="/">
              <div className="d-flex justify-content-center align-items-center">
                <h1>Epizon Book Store</h1>
                {isLoading && (
                  <Spinner
                    variant="success"
                    animation="border"
                    className="ms-2"
                  />
                )}
              </div>
            </Link>
          </Col>
          <CartIndicator />
        </Row>
        <Routes>
          <Route path="/" element={<BookStore />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
