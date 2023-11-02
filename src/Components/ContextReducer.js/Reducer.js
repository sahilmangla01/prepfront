

const reducer = (state , action)=>{
    switch(action.type){
        case "Loading":
            return{
                ...state,
                isLoading:true
            }
        case "Mock Data":
            return{
                ...state,
                mock:action.payload,
                isLoading:false
            }
        case "Video Data":
            return{
                ...state,
                video:action.payload,
                isLoading:false
            }
        case "Other Data":
            return{
                ...state,
                other:action.payload,
                isLoading:false
            }
         case "Project Data":
                return{
                    ...state,
                    project:action.payload,
                    isLoading:false
                }
        case "Error":
            return{
                ...state,
                isLoading:false
            }

        default:
            return state
    }
}
export default reducer