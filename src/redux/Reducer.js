import { combineReducers } from "redux"

const bukuState = {
    id:0,
    judulBuku:"",
    jumlahHalaman:0,
    namaPenulis:""
}

const userData = {
    id:0,
    name:"",
    email:"",
    phone:"",
    address:""
}

function bukuReducer (state=bukuState,action){
    if(action.type === "SET_BUKU"){
        return {
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}

function userReducer(state=userData,action){
    if(action.type==="SET_USER"){
        return{
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}

const reducer = combineReducers(
    bukuReducer,
    userReducer
)

export default reducer