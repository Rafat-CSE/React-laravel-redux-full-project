import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import {Login} from "../../../StoreForHealthApp/actions/LoginRegAction";
import {useLoggedIn} from "../../../StoreForHealthApp/utilities/useLoggedIn";



const LoginForm = () => {

    const history = useHistory();
    const loggedIn = useLoggedIn();
    const dispatch = useDispatch();
    const isLoggedInOrNot = useSelector(state=>state.loginOrNot.isLoggedIn);

    useEffect(()=>{
        if(isLoggedInOrNot){
            history.push('/welcome');
        }
    })

    let token = Cookies.get('XSRF-TOKEN');
    let config = {
        headers: {
            'Content-type': 'application/json',
            'X-XSRF-TOKEN': token,
        },
        withCredentials: true
    };



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailChangeHandler = (e) => {
        setEmail((prev)=>prev=e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword((prev)=>prev=e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: password
        };
        console.log(data);

        axios.post('http://localhost:8000/api/login/', data, config).then(res=>{
            console.log(res.data);
            dispatch(Login(res.data));
        })
    }

    return(
        <div>

            {/*LoginForm section start*/}
            <section className="mt-2 popularSpecialities">
                <h5>Login Form</h5>
                <div className="row mt-3">
                    <form>
                        <div className="form-group m-2">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" name="email"
                                   aria-describedby="emailHelp" placeholder="Enter email" onChange={emailChangeHandler}/>
                        </div>
                        <div className="form-group m-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password"
                                   placeholder="Password" onChange={passwordChangeHandler}/>
                        </div>
                        <div className="m-2">
                            <button type="submit" className="btn btn-success mBtnWidth" onClick={submitHandler}>Login</button>
                        </div>
                    </form>
                </div>



            </section>
            {/*LoginForm section end*/}

        </div>
    );
}
export default LoginForm;