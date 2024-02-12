// questo è il file principale della nostra implementazion di redux
// qui creeremo il vero e proprio "store", la memoria centralizzata

import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers' // è come puntare a ../reducers/index

const store = configureStore({
  reducer: mainReducer,
})

export default store
