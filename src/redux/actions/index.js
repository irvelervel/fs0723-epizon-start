export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'
export const RESET_CART = 'RESET_CART'

// ACTION CREATOR (una funzione che ritorna una action)
export const addToCartAction = (bookSelected) => {
  return {
    type: ADD_TO_CART, // proprietà obbligatoria
    payload: bookSelected, // proprietà caldamente consigliata perchè passa un dato!
  }
}

export const deleteFromCartAction = (i) => {
  return {
    type: DELETE_FROM_CART,
    payload: i, // indice del libro, così saprò quale rimuovere dall'array del cart
  }
}

export const resetCart = () => {
  return {
    type: RESET_CART,
  }
}

// FORMA CONTRATTA
// export const deleteFromCartAction = (i) => ({
//   type: DELETE_FROM_CART,
//   payload: i, // indice del libro, così saprò quale rimuovere dall'array del cart
// })

export const setUsernameAction = (inputValue) => {
  return {
    type: SET_USERNAME,
    payload: inputValue,
  }
}

// dobbiamo capire come creare un action creator che non ritorni solo una action, ma che sia anche in grado
// di eseguire prima operazioni (magari anche asincrone)
// la capacità di eseguire operazioni in un action creator una volta era prerogativa di un plugin di redux ("thunk")

// scriveremo un action creator "speciale": risolverà una fetch e ritornerà una action da dispatchare con il json ottenuto
