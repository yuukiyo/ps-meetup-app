import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { State, Reducer } from "./reducer";
import thunk from 'redux-thunk'

export interface AppState {
    state: State
}

const store = createStore(
    combineReducers<AppState>({
        state: Reducer
    }),
    compose(applyMiddleware(thunk))
)

export default store