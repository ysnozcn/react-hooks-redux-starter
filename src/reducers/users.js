import { GET_USERS } from '../actions/users';

export default function userReducer(state = [], { type, payload }) {
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                list: payload
            };
        default:
            return state;
    }
}