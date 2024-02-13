export const ADD_TO_CART = 'ADD_TO_CART'
export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'
export const RESET_CART = 'RESET_CART'
export const SAVE_AVAILABLE_BOOKS = 'SAVE_AVAILABLE_BOOKS'
export const TURN_OFF_SPINNER = 'TURN_OFF_SPINNER'

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

export const resetCart = () => {
  return {
    type: RESET_CART,
  }
}

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

export const getBooksActionCreator = () => {
  return async (dispatch, getState) => {
    // se normalmente un action creator torna solo un oggetto, "thunk" ci permette di ritornare ANCHE una funzione
    // la funzione verrà eseguita da Redux e verrà arricchita di 2 parametri: il metodo dispatch e il metodo getState

    console.log(getState())
    // getState, se invocato, ritorna lo stato corrente dello store di Redux
    // è una chicca che vi permette di basare determinate decisioni sull'attuale contenuto dello store
    // if (getState().cart.content.length < 3) {
    //   console.log(
    //     'finora hai aggiunto al carrello ' +
    //       getState().cart.content.length +
    //       ' libri'
    //   )
    // }

    try {
      let resp = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (resp.ok) {
        let fetchedBooks = await resp.json()
        // setBooks(fetchedBooks) // ?
        // ora abbiamo i libri! dobbiamo spedirli al reducer
        dispatch({
          type: SAVE_AVAILABLE_BOOKS,
          payload: fetchedBooks,
        })
      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error)
    } finally {
      dispatch({
        type: TURN_OFF_SPINNER,
      })
    }
  }
}
