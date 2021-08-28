import { combineReducers } from "redux";
import postReducer from "./post";

//başka reduserlar kolayca ekleyebiliriz
const rootReducer = combineReducers({
    posts: postReducer,
})

export default rootReducer;