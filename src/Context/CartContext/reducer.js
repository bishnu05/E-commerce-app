// reducer related to cart state;
export function cartReducer(state,action)
{
    switch(action.type)
    {
        case "GET_ADD":{
            return{
                ...state,
                data:action.payload,
                isError:false,
            }
        }
        case 'GET_REMOVE':{
            return{
                ...state,
                isError:false,
                data:action.payload
            }
        }
            case 'GET_CHECKOUT':{
                return{
                  ...state,
                  isLoading:false,
                  data:action.payload

                }
           
        }


      default:{
        return state;
      }
    }
}