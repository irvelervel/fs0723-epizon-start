// qui dentro vado ora a scrivere il mio reducer, la mia funzione PURA

import { SET_USERNAME } from '../actions'

// un reducer necessita dello stato INIZIALE del nostro applicativo
// uno store si divide in "slices"
const initialState = {
  username: '',
}

const userReducer = (state = initialState, action) => {
  // questa è una funzione in carico di ritornare SEMPRE il nuovo stato dell'applicativo
  // la nuova "palla da bowling", sigillata, atomica, read-only, immutabile, etc.
  // quasi sempre la funzione reducer sarà composta da uno SWITCH CASE
  switch (action.type) {
    // "type" è l'unica proprietà OBBLIGATORIA di una action

    // cominciare a specificare un po' di "binari"

    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      }

    default:
      return state
    // nella peggiore delle ipotesi, il nostro robottino tornerà come nuovo stato
    // l'ultimo stato valido, senza apportare nessuna modifica (o senza rompere niente)
  }
}

export default userReducer
