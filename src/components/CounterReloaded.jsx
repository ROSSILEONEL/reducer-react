import {  useReducer } from "react";

export const CounterReloaded = () => {
        const TYPES = {
        SUMAR: "sumar",
        RESTAR: "restar",
        SUMAR_5: "sumar_5",
        RESTAR_5: "restar_5"
      }
        const reducer = (state, action) => {
          switch (action.type) {
            case TYPES.SUMAR:
              return {
                count: state.count + 1,
              };
              case TYPES.RESTAR:
               return {
                count: state.count - 1
               }
               case TYPES.SUMAR_5:
                return{
                  count:state.count+action.payload
                }
                case TYPES.RESTAR_5:
                return{
                  count:state.count-action.payload
                }
          }
        };
      
        const [ state, dispatch]  = useReducer(reducer, { count: 0 });
      
     
      
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
