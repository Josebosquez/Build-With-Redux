import { useDispatch } from "react-redux";
import { createStore } from "redux";

const count = 0;
const ADD_1= "ADD_1"

export const addOneActionCreator = (count) => ({type: ADD_1, payload: {count}})

const reducer = (count, action) => {
    if(action.type === ADD_1){
        count = count + 1
        console.log(count)
    }
    return count;
}

const store = createStore(reducer, count, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;