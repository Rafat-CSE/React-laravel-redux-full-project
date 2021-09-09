import React, {useEffect} from "react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {useSelector} from "react-redux";

const ConfirmAppointment = (props) => {


    const history = useHistory();
    const isLoggedInOrNot = useSelector(state=>state.loginOrNot.isLoggedIn)

    useEffect(()=>{
        if (!isLoggedInOrNot){
            history.push('/');
        }
    })
    // let image =  props.img;
    let name =  props.name;

    return(
        <>
            <div className="card h-100 m-2">
                <div className="card-body ">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <img src="./images/Doctors/doctor1.jpeg" className="img-fluid img-thumbnail" alt="pS_image" width="150px" height="150px"/>
                            <p className="text-success myTestSize fw-bold mt-2" onClick={props.onShowProfile}>View Profile</p>
                        </div>
                        <div className="col-md-9 my-card-text">
                            <h5 className="card-title">{name}</h5>
                            <p>Consultant Physician, COVID Consultation and Diabetologist
                                TATA Health Clinic HSR Layout</p>
                            <p>5 years of experience</p>
                            <h6 className="text-success">500Tk.</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card h-100 m-2">
                <div className="card-header p-5">
                    <h5>Let's confirm your appointment</h5>
                    <p className="text-secondary">Please confirm your phone number to continue</p>
                    <p className="text-secondary">By Clicking on the "Continue" button or Social Profiles,
                        you agree to <strong className="text-success">Terms</strong> of Use & <strong className="text-success">Privacy Policy</strong></p>

                    <div className="p-3">
                        <form>
                            <input type="number" className="form-control" placeholder="Enter your mobile number"/>
                            <button className="btn btn-success mBtnWidth mt-4">Continue</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ConfirmAppointment;