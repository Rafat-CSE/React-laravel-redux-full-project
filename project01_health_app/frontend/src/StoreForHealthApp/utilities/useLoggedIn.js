import Cookies from 'js-cookie'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {CheckUser} from "../actions/LoginRegAction";


export const useLoggedIn = () => {


    const loginUser =  useSelector((state) => {
        return state.loginOrNot;
    })
    const dispatch = useDispatch()

    let token = Cookies.get('XSRF-TOKEN');
    let config = {
        headers: {
            'Content-type': 'application/json',
            'X-XSRF-TOKEN': token,
        },
        withCredentials: true
    };

    useEffect(() => {
        axios.get('http://localhost:8000/sanctum/csrf-cookie', config).then(res=>{
            axios.get('http://localhost:8000/api/auth',config).then((res) => {
                dispatch(CheckUser(res.data));
            })
        })
    },[])
    return loginUser;
}
