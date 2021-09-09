import React from "react";
import {Link} from "react-router-dom";

const Doctors = (props) => {
    let image =  props.img;
    let name =  props.name;

    return(

            <div className="card h-100 m-2">
                <div className="card-body ">
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <img src={image} className="img-fluid img-thumbnail" alt="pS_image" width="150px" height="150px"/>
                            <Link to='/doctorProfile' class="tdTN"><p className="text-success myTestSize fw-bold mt-2">View Profile</p></Link>
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
                            <Link to='selectTimeSlot'><span type="button" className="btn btn-success btn-lg p-2 mBtnWidth">Consult Online</span></Link>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Doctors;