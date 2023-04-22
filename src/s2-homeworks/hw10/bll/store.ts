import { loadingReducer } from './loadingReducer'
import { combineReducers, legacy_createStore, compose } from 'redux'
import { themeReducer } from '../../hw12/bll/themeReducer'

const reducers = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})

declare global {
    interface Window {
        REDUX_DEVTOOLS_EXTENSION_COMPOSE?: typeof compose;
    }
}

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

   /* ,composeEnhancers()*/

export const store = legacy_createStore(reducers,composeEnhancers())



export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
