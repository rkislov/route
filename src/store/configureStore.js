import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {rootReducer} from '../reducers'


export default function configureStore(){
    const store = compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(createLogger())
    )(createStore)(rootReducer)

    if (module.hot) {
        module.hot.accept('../reducers', ()=>{
            const nextRootReducer = require('../reducers').rootReducer
            store.replaceReducers(nextRootReducer)
        });
    }
    return store
}