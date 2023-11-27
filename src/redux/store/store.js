import { legacy_createStore as createStore, combineReducers } from "redux";
import user from "./user";
import teacher from "./teacher";
import lesson from "./lesson";
import category from "./category";

const reducer = combineReducers({category, user, teacher, lesson});

const store = createStore(reducer);

export default store;
