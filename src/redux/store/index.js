// questo è il file principale della nostra implementazion di redux
// qui creeremo il vero e proprio "store", la memoria centralizzata

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'
import bookReducer from '../reducers/book'

const globalReducer = combineReducers({
  // in questo oggetto RI-UNIFICO tutti i reducers!
  cart: cartReducer,
  user: userReducer,
  book: bookReducer,
  // ad ogni reducer assegno una chiave (es. "cart"), che sarà il nome della sua slice
})

const store = configureStore({
  reducer: globalReducer,
})

export default store
