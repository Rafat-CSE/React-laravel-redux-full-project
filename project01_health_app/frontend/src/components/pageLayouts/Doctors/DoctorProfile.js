import React, {useEffect, useState} from "react";
import ProfileDetails from "./ProfileDetails";
import ClinicDetails from "./ClinicDetails";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const DoctorProfile = (props) => {

    const history = useHistory();
    const isLoggedInOrNot = useSelector(state=>state.loginOrNot.isLoggedIn)

    useEffect(()=>{
        if (!isLoggedInOrNot){
            history.push('/');
        }
    })

    const [showProfileDetails, setShowProfileDetails] = useState(true);
    const [showClinicDetails, setShowClinicDetails] = useState(false);

    // let image =  props.img;
    let name =  props.name;


    const showProfileDetailsHandler = () => {
        setShowProfileDetails((prev)=>prev = true);
        setShowClinicDetails((prev)=>prev = false);
    }

    const showClinicDetailsHandler = () => {
        setShowProfileDetails((prev)=>prev = false);
        setShowClinicDetails((prev)=>prev = true);
    }

    return(

        <>
            <div className="card h-100 m-2">
                <div className="card-body ">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <img src="./images/Doctors/doctor1.jpeg" className="img-fluid img-thumbnail" alt="pS_image" width="150px" height="150px"/>

                        </div>
                        <div className="col-md-9 my-card-text">
                            <h5 className="card-title">{name}</h5>
                            <p>Consultant Physician, COVID Consultation and Diabetologist
                                TATA Health Clinic HSR Layout</p>
                            <p>5 years of experience</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <span className="badge bg-success p-3 fs-6 mBtnWidth">500Tk</span>
                        </div>
                        <div className="col-md-9">
                            <Link to='selectTimeslot'> <span type="button" className="btn btn-success btn-lg p-2 mBtnWidth">Consult Online</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card h-100 m2">
                <div className="card-header">
                    <div className="row">
                        <div className="col-md-6 text-center text-uppercase" onClick={showProfileDetailsHandler}>
                            <p className={`mt-1 ${showProfileDetails ? 'my-active' : ''}`}>Profile</p>
                        </div>
                        <div className="col-md-6 text-center text-uppercase" onClick={showClinicDetailsHandler}>
                            <p className={`mt-1 ${showClinicDetails ? 'my-active' : ''}`}>Clinic</p>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    {showProfileDetails && <ProfileDetails />}
                    {showClinicDetails && <ClinicDetails />}

                </div>
            </div>
        </>
    );
}
export default DoctorProfile;