import { useReducer } from "react";

export const useCountReducer = () => {
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
      
        const initialState= {count:0}
        const [ state, dispatch]  = useReducer(reducer,initialState );

        const sumar = () =>{
            return dispatch({ type: TYPES.SUMAR })
        }

        const restar =()=>{
          return dispatch({type: TYPES.RESTAR})
        }


  return {
    state,
    sumar,
    restar
  }
}
