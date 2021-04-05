import
{
  CLEAR_USER,
  COMMENT_USER,
  POST_USER
} from '../action/User'



const initialState = {

  token: null,
  info: {
    roles: [{ id: 0, type: 0 }],

  },
  accidents: [],
  rejectedAccidentIds: [],

}

function userReducer(state = initialState, action)
{
  if (typeof state === 'undefined')
  {
    return initialState
  }

  switch (action.type)
  {
    case CLEAR_USER:
      return initialState
 case COMMENT_USER : 
 return {...state, userComment: action.payload}
 case POST_USER : {
   return {...state, userPost:action.payload}
 }
    default:
      return state
  }
}

export default userReducer