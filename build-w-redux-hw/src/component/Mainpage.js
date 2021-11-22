import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addOneActionCreator } from './counter'

function Mainpage() {
    const count = useSelector(count => count)
    const dispatch = useDispatch()   

    const addOne = () => dispatch(addOneActionCreator(count))

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '500px', width: '350px', border: "1px solid black", alignContent: 'center', alignItems: 'center' }}>
            <div >
                <button style={{ height: "50px" }} onClick={() => addOne()}>
                    +
                </button>
            </div>
            <p style={{ fontSize: "50px" }}>{count}</p>
            <div>
                <button style={{ height: "50px" }}>
                    -
                </button>
            </div>
        </div>
    )
}

export default Mainpage
