
export const Login = (data) => {
    return(
        {
            type: 'LOGIN',
            payload: data
        }
    );
}

export const Logout = () => {
    return(
        {
            type: 'LOGOUT'
        }
    );
}


export const CheckUser = (data) => {
    console.log(data)
    return(
        {
            type: 'CHECK-USER',
            payload: data
        }
    )
}
