import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { Action } from './action';

export interface State {
    name: string,
    furigana: string,
    email: string
}

const initialState: State = {
    name: '',
    furigana: '',
    email: ''
}

export const Reducer = reducerWithInitialState(initialState)
    .case(Action.updateName, (state, name) => {
        return Object.assign({}, state, { name })
    })
    .case(Action.updateFurigana, (state, furigana) => {
        return Object.assign({}, state, { furigana })
    })
    .case(Action.updateEmail, (state, email) => {
        return Object.assign({}, state, { email })
    })