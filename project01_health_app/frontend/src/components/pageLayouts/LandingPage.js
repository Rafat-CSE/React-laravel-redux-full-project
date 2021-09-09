import React, {useEffect, useState} from "react";
import './LandingPage.css';
import Footer from "./includes/Footer";
import {useDispatch, useSelector} from "react-redux";

import {Link} from "react-router-dom";
import axios from "axios";
// import login from "../../StoreForHealthApp/actions/LoginRegAction";
import Cookies from "js-cookie";
import {useLoggedIn} from "../../StoreForHealthApp/utilities/useLoggedIn";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {Logout} from "../../StoreForHealthApp/actions/LoginRegAction";
import Navbar from "./includes/Navbar";
import getAllPopularSpecialities from "../../StoreForHealthApp/actions/getAllPopularSpecialities";



const LandingPage = ({children}) => {

    const loggedIn = useLoggedIn();
    const dispatch = useDispatch();
    const history = useHistory();
    const isLoggedInOrNot = useSelector(state=>state.loginOrNot.isLoggedIn);
    const user = useSelector(state=>state.loginOrNot.user);

    let token = Cookies.get('XSRF-TOKEN');
    let config = {
        headers: {
            'Content-type': 'application/json',
            'X-XSRF-TOKEN': token,
        },
        withCredentials: true
    };

    useEffect(() => {
        if(isLoggedInOrNot){
            history.push('/welcome');
        }
    }, [isLoggedInOrNot, loggedIn])

    console.log(token);
    const logoutHandler = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8000/sanctum/csrf-cookie', config).then(res=>{
            axios.get('http://localhost:8000/api/logout/', config).then(res=>{
                Cookies.remove('XSRF-TOKEN');
                dispatch(Logout());
                history.push('/');
            })
        });
    }

    const popularSpecialitiesHandler = () => {
        axios.get('http://localhost:8000/sanctum/csrf-cookie', config).then(res=>{
            axios.get(`http://localhost:8000/api/popular_specialities/`, config).then(res => {
                history.push('/popularSpecialities');
                dispatch(getAllPopularSpecialities(res.data.popularSpecialities));
            });
        });
    }


    return(
        <div className="row position-relative">
            <div className="dn col-md-7 border-end border-1 border-dark position-fixed top-0 start-0">
                <div>

                    {/*Header section start*/}
                    <header className="mt-3">
                        <div>
                            <div className="logoSize">
                                <Link to='/'><img src="./images/logo.png" alt="logo" className="img-fluid"/></Link>
                            </div>
                        </div>
                    </header>
                    {/*Header section end*/}

                    {/*Body section start*/}
                    <section>
                        <div className="myTest">
                            <img src="./images/consult_bg.png" alt="logo" className="img-fluid"/>

                        </div>
                    </section>
                    {/*Body section end*/}

                </div>
            </div>
            <div className="col-md-5 position-absolute top-0 end-0">
                <div>
                    {/*Header section start*/}
                    <header>
                        <div className="row">
                            <div className="col-2 col-md-2 bar my-mar">
                                <a className="btn btn-success" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                   aria-controls="offcanvasExample">
                                    <i className="fas fa-bars"></i>
                                </a>
                            </div>
                            <div className="col-10 col-md-10 logoSize">
                                <img src="./images/logo.png" alt="logo" className="img-fluid"/>
                            </div>
                        </div>
                    </header>
                    {/*Header section end*/}




                    {/*Search location section start*/}
                    <section>
                        <div className="col-4 col-md-4 text-center">
                            {isLoggedInOrNot && <p className="myNameSpan">{user.name}</p>}
                        </div>
                        <div className="location border border-1 p-2">
                            <span className="me-2"><i className="fas fa-map-marker-alt"></i></span><span className="fw-bold">Bangladesh</span>
                            <p>Search for doctor's or clinics</p>
                        </div>
                    </section>
                    {/*<button className="btn btn-success" onClick={logoutHandler}>Logout</button>*/}
                    {/*Search location section end*/}

                    <Navbar onLogoutHandler={logoutHandler} onPopularSpecialitiesHandler={popularSpecialitiesHandler}/>

                    {/*<div className="m-2 p-1">*/}
                    {/*    {isLoggedInOrNot ? <Link to='/popularSpecialities'><span className="btn btn-success">Book Appointment</span></Link>*/}
                    {/*    : <div>*/}
                    {/*            <Link to='/login'><span className="btn btn-success me-2">Login</span></Link>*/}
                    {/*            <Link to='/register'><span className="btn btn-success">Reistration</span></Link>*/}
                    {/*        </div>*/}
                    {/*    }*/}
                    {/*</div>*/}


                    {children}





                    {/*body section end*/}

                    {/*Footer section start*/}
                    <section className="footer mt-2 p-5">
                        <Footer />
                    </section>
                    {/*Footer section end*/}

                    {/*Sidebar code start*/}
                    <div className="offcanvas offcanvas-start myOff-start" tabIndex="-1" id="offcanvasExample"
                         aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header bg-success">
                           <div className="row">
                                <div className="col-md-6">
                                    <img src="./images/Doctors/doctor1.jpeg" alt="image" className="img-fluid img-thumbnail" width="100px" height="100px"/>
                                </div>
                                <div className="col-md-6 text-white">
                                    <p>Hello </p>
                                    <h6>Guest </h6>
                                </div>
                            </div>
                        </div>
                        <div className="offcanvas-body">
                            <div className="p-3">
                                <i className="fas fa-phone-alt me-3 text-secondary"></i><span className="fs-6">InstaDoc</span>
                            </div>
                            <div className="p-3">
                                <i className="fas fa-user me-3 text-secondary"></i><span className="fs-6">Book Appointment</span>
                            </div>
                        </div>
                    </div>
                    {/*Sidebar code end*/}

                </div>
            </div>
        </div>
    );
}
export default LandingPage;