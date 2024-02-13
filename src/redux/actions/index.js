export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

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
