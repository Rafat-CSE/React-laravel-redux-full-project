import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useLoggedIn} from "../../../StoreForHealthApp/utilities/useLoggedIn";
import {useSelector} from "react-redux";

const Navbar = (props) => {

    const loggedIn = useLoggedIn();
    const isLoggedInOrNot = useSelector(state=>state.loginOrNot.isLoggedIn)

    return(
        <nav className="mt-2">
            {!isLoggedInOrNot && <Link to="/login"><button className="btn btn-success m-1">Login</button></Link>}
            {!isLoggedInOrNot && <Link to="/register"><button className="btn btn-success m-1">Registration</button></Link>}
            {isLoggedInOrNot && <button className="btn btn-success m-1" onClick={props.onPopularSpecialitiesHandler}>Book Appointment</button>}
            {isLoggedInOrNot && <button className="btn btn-success m-1" onClick={props.onLogoutHandler}>Logout</button>}
        </nav>
    );
}
export default Navbar;