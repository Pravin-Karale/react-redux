import { ADD_TO_CART } from '../constants'
const initialState = {
    cardData: []
}

export default function cardItems(State = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.warn("reducer",action)
            return [
                ...State,
                {cardData: action.data}
             ]
        default:
            return State
    }

}