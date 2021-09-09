const init = {
    user: null,
    isLoggedIn: false
}

const LoginOrNot = (state=init, action) => {
    switch (action.type){
        case 'CHECK-USER':
            return {...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case 'LOGIN':
            return {...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case 'LOGOUT':
            return {...state,
                isLoggedIn: false,
            };
        default:
            return state;
    }
}

export default LoginOrNot;