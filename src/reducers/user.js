import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS
} from '../constants/User.js'

const initialState = JSON.parse(window.localStorage.getItem('rr_login')) || {}

export default function userstate(state = initialState, action) {

    switch (action.type) {

        case LOGIN_REQUEST:
        //todo
        return{}

        case LOGIN_SUCCESS:
        //todo
        return{}

        case LOGIN_FAIL:
        //todo
        return{}

        case LOGOUT_SUCCESS:
        //todo
        return{}

        default:
        return state
    }
}