import {  useReducer } from "react";
import { TYPES } from "../actions/contadorActions";
import { contadorReducer , initialState,initialCounter } from "../reducers/contadorReducer";

export const CounterReloaded = () => {
       
     
      
        const [ state, dispatch]  = useReducer(contadorReducer, initialState,initialCounter );
      
     
      
    return (
   <>
     <h1>HOOK ⚛ UseReducer</h1>
     <h4>Counter Mejorado</h4>
      <div className="counter">
        <button onClick={()=>{dispatch({ type: "sumar" })}}>sumar</button>
        <button onClick={()=>{dispatch({ type: TYPES.SUMAR_5, payload: 5 })}}>sumar +5</button>
        <p style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>
          {state.count}
        </p>
        <button onClick={() => dispatch({ type: TYPES.RESTAR_5, payload: 5 })}>restar -5</button>
        <button onClick={() => dispatch({ type: "restar" })}>restar</button>
      </div>
   </>
  )
}
