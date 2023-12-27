import { TYPES } from "../actions/contadorActions";

export const initialState = { count: 0 };

export const contadorReducer = (state, action) => {
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

 export const initialCounter =(initial)=>{
    return {count:initial.count+100}
  }