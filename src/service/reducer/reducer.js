import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const initialState = {
    cardDaata: []
}

export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("Reducer : ", action)
            return {
                ...state,
                cardDaata: [...state.cardDaata, action.data]
            }
            break;
        case REMOVE_TO_CART:
            state.cardDaata.pop();
            return {
                ...state,
            }
            break;

        default:
            return state
    }
}