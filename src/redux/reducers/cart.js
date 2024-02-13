// qui dentro vado ora a scrivere il mio reducer, la mia funzione PURA

import { ADD_TO_CART, DELETE_FROM_CART, RESET_CART } from '../actions'

// un reducer necessita dello stato INIZIALE del nostro applicativo
// uno store si divide in "slices"
const initialState = {
  content: [], // array di libri nel carrello
}

// una volta che separiamo i reducers, ognuno di essa sarà in carico solamente della propria "porzione"
// quindi cartReducer avrà in carico solamente il valore della slice chiamata "cart"
// lo stato da mantenere è diventato il precedente contenuto della slice "cart"

const cartReducer = (state = initialState, action) => {
  // questa è una funzione in carico di ritornare SEMPRE il nuovo stato dell'applicativo
  // la nuova "palla da bowling", sigillata, atomica, read-only, immutabile, etc.
  // quasi sempre la funzione reducer sarà composta da uno SWITCH CASE
  switch (action.type) {
    // "type" è l'unica proprietà OBBLIGATORIA di una action

    // cominciare a specificare un po' di "binari"
    case ADD_TO_CART:
      // state.cart.content.push(action.payload) // VIETATISSIMA!
      // in un reducer, poichè è una funzione PURA, non si possono usare metodi che ALTERANO
      // i parametri (in particolare l'oggetto state)
      return {
        ...state,
        // copio anche il contenuto di cart, perchè magari in un futuro vi aggiungerò proprietà!
        // 2 modi per aggiungere un elemento ad un array senza usare push (che è vietato)
        // content: state.cart.content.concat(action.payload) // 1)
        content: [...state.content, action.payload], // 2)
      }

    case DELETE_FROM_CART:
      return {
        ...state,
        // 2 metodi per creare un nuovo array privo di un elemento senza danneggiare l'originale
        //   content: [
        //     ...state.cart.content.slice(0, action.payload), // tutti gli elementi prima di action.payload
        //     ...state.cart.content.slice(action.payload + 1), // tutti gli elementi DOPO action.payload
        //   ],
        content: state.content.filter((book, i) => i !== action.payload), // tieni tutti i libri
        // ma escludi quello che ha i come action.payload (che è l'indice del libro da eliminare)
      }

    case RESET_CART:
      return {
        ...state,
        content: [],
      }

    default:
      return state
    // nella peggiore delle ipotesi, il nostro robottino tornerà come nuovo stato
    // l'ultimo stato valido, senza apportare nessuna modifica (o senza rompere niente)
  }
}

export default cartReducer
