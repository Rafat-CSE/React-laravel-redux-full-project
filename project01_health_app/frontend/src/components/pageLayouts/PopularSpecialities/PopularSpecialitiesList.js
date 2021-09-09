import React, {useEffect, useState} from "react";
import axios from "axios";
import Slider from "../includes/Slider";
import PopularSpecialities from "./PopularSpecialities";
import {useDispatch, useSelector} from "react-redux";
import getAllPopularSpecialities from "../../../StoreForHealthApp/actions/getAllPopularSpecialities";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import Cookies from "js-cookie";

const PopularSpecialitiesList = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const popularSpecialities = useSelector(state=>state.getAllPopularSpecialities.allPopularSpecialities);
    const isLoggedInOrNot = useSelector(state=>state.loginOrNot.isLoggedIn)

    let token = Cookies.get('XSRF-TOKEN');
    let config = {
        headers: {
            'Content-type': 'application/json',
            'X-XSRF-TOKEN': token,
        },
        withCredentials: true
    };
    console.log(token);

    useEffect(()=>{

        if (!isLoggedInOrNot){
            history.push('/');
        }
    })

    return(
        <div>
            {/*Slider section start*/}
            <section className="mt-2 p-1 border-top border-3">
                <Slider />
            </section>
            {/*Slider section end*/}

            {/*Popular Specialities section start*/}
            <section className="mt-2 popularSpecialities">
                <h5>Popular Specialities</h5>
                <div className="row mt-3">

                    {popularSpecialities.map((getPopularSpecialities, index) =>
                        <PopularSpecialities key={index } img={getPopularSpecialities.image} title={getPopularSpecialities.title}/>
                    )}

                </div>



            </section>
            {/*Popular Specialities section end*/}

        </div>
    );
}
export default PopularSpecialitiesList;