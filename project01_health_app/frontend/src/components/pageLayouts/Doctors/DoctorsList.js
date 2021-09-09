import React, {useEffect} from "react";
import Doctors from "./Doctors";
import axios from "axios";
import getAllPopularSpecialities from "../../../StoreForHealthApp/actions/getAllPopularSpecialities";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom/cjs/react-router-dom";


const DUMMY = [];
const DoctorsList = (props) => {
    const history = useHistory();
    const isLoggedInOrNot = useSelector(state=>state.loginOrNot.isLoggedIn)

    useEffect(()=>{
        if (!isLoggedInOrNot){
            history.push('/');
        }
    })


    return(
        <div>


            {/*Doctors List section start*/}
            <section className="mt-2 popularSpecialities">
                <h5>All available doctors</h5>

                <Doctors img="./images/Doctors/doctor1.jpeg" name="Dr. Ajit M Ghadge" onShowProfile={props.onShowDoctorProfileHandler} onShowSelectTimeSlot={props.onShowSelectTimeSlotHandler}/>
                <Doctors img="./images/Doctors/doctor1.jpeg" name="Dr. Ajit M Ghadge" onShowProfile={props.onShowDoctorProfileHandler} onShowSelectTimeSlot={props.onShowSelectTimeSlotHandler}/>
                <Doctors img="./images/Doctors/doctor1.jpeg" name="Dr. Ajit M Ghadge" onShowProfile={props.onShowDoctorProfileHandler} onShowSelectTimeSlot={props.onShowSelectTimeSlotHandler}/>
                <Doctors img="./images/Doctors/doctor1.jpeg" name="Dr. Ajit M Ghadge" onShowProfile={props.onShowDoctorProfileHandler} onShowSelectTimeSlot={props.onShowSelectTimeSlotHandler}/>

            </section>
            {/*Doctors List section end*/}

        </div>
    );
}
export default DoctorsList;