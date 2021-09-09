import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import Cookies from 'js-cookie';



const RegisterForm = () => {

    const history = useHistory();
    const isLoggedInOrNot = useSelector(state=>state.loginOrNot.isLoggedIn)


    let token = Cookies.get('XSRF-TOKEN');
    let config = {
        headers: {
            'Content-type': 'application/json',
            'X-XSRF-TOKEN': token,
        },
        withCredentials: true
    };

    useEffect(()=>{

        if (isLoggedInOrNot){
            history.push('/popularSpecialities');
        }else{
            axios.get('http://localhost:8000/sanctum/csrf-cookie', config).then(res=>{

            });
        }
    }, [])


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nameChangeHandler = (e) => {
        setName((prev)=>prev=e.target.value);
    }
    const emailChangeHandler = (e) => {
        setEmail((prev)=>prev=e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword((prev)=>prev=e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let data = {
            name: name,
            email: email,
            password: password
        };
        console.log(data);

        axios.post('http://localhost:8000/api/registration/', data, config).then(res=>{
            console.log(res.data);
        })
    }

    return(
        <div>

            {/*LoginRegisterForm section start*/}
            <section className="mt-2 popularSpecialities">
                <h5>Registration Form</h5>
                <div className="row mt-3">
                    <form>
                        <div className="form-group m-2">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name"
                                   aria-describedby="emailHelp" placeholder="Enter Name" onChange={nameChangeHandler}/>
                        </div>
                        <div className="form-group m-2">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email" onChange={emailChangeHandler}/>
                        </div>
                        <div className="form-group m-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password"
                                   placeholder="Password" onChange={passwordChangeHandler}/>
                        </div>

                        <div className="m-2">
                            <button type="submit" className="btn btn-success mBtnWidth" onClick={submitHandler}>Registration</button>
                        </div>
                    </form>
                </div>



            </section>
            {/*RegisterForm section end*/}

        </div>
    );
}
export default RegisterForm;