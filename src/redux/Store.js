import { createStoreHook } from "react-redux";
import { createStore } from "redux";
import reducer from "./Reducer";


const store= createStoreHook(reducer)

export default store;