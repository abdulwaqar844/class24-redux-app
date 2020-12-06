import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
//import { increment, decrement, incrementByAmount } from '../store/action';
function Counter() {
    //const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector( (state)=> {
        return state.counter
    });
  return (
    <div >
        <div>Counter: {counter}</div>
        <div>
            <button onClick={()=>{
                //setCounter(counter+1);
                dispatch( {type:"INCREMENT"} );
                //dispatch(increment());
            }}>Increment</button>
            <br/>
            <button onClick={()=>{
                //setCounter(counter-1);
                dispatch( {type:"DECREMENT"} );
                //dispatch( decrement());
            }}>Decrement</button>
        </div>
    <div>
    <input type="text" placeholder="Enter Value to Increase" onChange={(e)=>{
        setValue(e.target.value);
        
    }} /><br/>
    <button onClick={()=>{
                //setCounter(counter-1);
                dispatch( {type:"INCREASEBYVALUE",payload:Number(value)} );
                //dispatch( decrement());
                console.log(value)
            }}>INCREAMENT BY VALUE</button>
    </div>
    </div>
  );
}

export default Counter;