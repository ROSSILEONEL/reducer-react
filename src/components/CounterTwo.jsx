import { useCountReducer } from "../hooks/useCountReducer"

export const CounterTwo = () => {
       
      const { state, sumar, restar } = useCountReducer()
     
      
    return (
   <>
     <h1>HOOK ⚛ UseReducer</h1>
     <h4>Contador con CustomHook</h4>
      <div className="counter">
        <button onClick={()=>{sumar()}}>sumar</button>
        {/* <button onClick={()=>{dispatch({ type: TYPES.SUMAR_5, payload: 5 })}}>sumar +5</button> */}
        <p style={{ fontSize: "20px", color: "blue", fontWeight: "bold" }}>
          {state.count}
        </p>
        {/* <button onClick={() => dispatch({ type: TYPES.RESTAR_5, payload: 5 })}>restar -5</button> */}
        <button onClick={() => restar()}>restar</button>
      </div>
   </>
  )
}
