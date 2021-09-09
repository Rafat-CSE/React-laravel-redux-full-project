import React, {useEffect} from "react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const SelectTimeSlot = (props) => {

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
            <h5 className="m-2">Select Time Slot</h5>
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
                    <div className="my-bg-color col-md-4 p-2">
                        <i className="fas fa-video"></i><span className="m-2">500tk</span>
                        <h6>Consult Online</h6>
                    </div>
                </div>
            </div>
            <div className="card h-100 m2">
                <div className="card-header text-center">
                    <i className="fas fa-calendar-alt text-success me-2"></i><span className="fs-5 text-success fw-bold">Today, 30 August 2021</span>
                </div>
                <div className="card-body">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <i className="fas fa-moon text-secondary me-2"></i><span>Morning</span>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show"
                                 aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined1"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined1">4:30 PM</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined2"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined2">5:00 PM</label><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined3"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined3">5:30 PM</label><br/>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined4"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined4">6:00 PM</label><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined5"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined5">6:00 PM</label><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined6"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined6">7:00 PM</label><br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <i className="fas fa-sun text-secondary me-2"></i><span>Evening</span>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                 data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined1"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined1">4:30 PM</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined2"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined2">5:00 PM</label><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined3"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined3">5:30 PM</label><br/>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined4"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined4">6:00 PM</label><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outline5"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined5">6:30 PM</label><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined6"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined6">7:00 PM</label><br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    <i className="far fa-sun text-secondary me-2"></i><span>Afternoon</span>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined1"
                                               autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined1">4:30 PM</label>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined2"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined2">5:00 PM</label><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined3"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined3">5:30 PM</label><br/>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined4"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined4">6:00 PM</label><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outline5"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined5">6:30 PM</label><br/>
                                        </div>
                                        <div className="col-md-4">
                                            <input type="radio" name="selectTimeSlot" className="btn-check" id="btn-check-outlined6"
                                                   autoComplete="off"/>
                                            <label className="btn btn-outline-success fw-bold" htmlFor="btn-check-outlined6">7:00 PM</label><br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <Link to='/confirmAppointment'><span className="btn btn-success mBtnWidth">Continue</span></Link>
            </div>
        </>
    );
}
export default SelectTimeSlot;