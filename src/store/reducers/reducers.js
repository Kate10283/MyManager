import { GET_USER } from "../types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            console.log(action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
}