import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import {createBrowserHistory} from "history";

const history = createBrowserHistory()
const initial = {}

export default function appReducer(state = initial, action: any) {

    return state;

}

const rootReducer = combineReducers({
    app: appReducer,
    router: connectRouter(history)
})
export default rootReducer;