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
    address:"",
    isLogin:false
}

function BukuReducer (state=bukuState,action){
    if(action.type === "SET_BUKU"){
        return {
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}

function UserReducer(state=userData,action){
    if(action.type==="SET_USER"){
        return{
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}

const reducer = combineReducers({
    BukuReducer,
    UserReducer
})

export default reducer