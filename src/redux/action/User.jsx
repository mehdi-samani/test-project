//================Type 
export const CLEAR_USER = 'CLEAR_USER'
export const COMMENT_USER = 'COMMENT_USER'
export const POST_USER = 'POST_USER'

export const clearUser = () => ({
    type: CLEAR_USER
  
  })

export const commentUser = (payload) =>{
    return async (dispatch)=>{
        await dispatch({type:COMMENT_USER , payload})
    }
}

export const postUser = (payload)=>{
    return async (dispatch) =>{
        await dispatch({type:POST_USER, payload})
    }
}
