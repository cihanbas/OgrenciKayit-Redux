export const EmailChanged=({email})=>{
    return(dispatch)=>{
        dispatch({
            type:'email_changed',
            payload:email
        })
    }
};

export const PasswordChanged=({password})=>{
    return (dispatch)=>{
        dispatch({
            type:'passwordChanged',
            payload:password
        })
    }
};