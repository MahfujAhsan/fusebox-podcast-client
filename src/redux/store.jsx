import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const initialState = {}

const reducer = combineReducers({
    mainSong: songReducer
});

const store = ({
    reducer,
    initialState,
    composeWithDevTools
})