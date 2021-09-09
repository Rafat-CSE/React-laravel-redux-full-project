import React from "react";
import {Link} from "react-router-dom";

const PopularSpecialities = (props) => {
    let image =  props.img;
    console.log(image);




    return(
       <div className="col-md-4 mt-1">
           <Link to='/doctors' class="tdTN">
               <div className="card h-100">
                   <img src={`../../../images/Popular_Specialities/${image}`} className="card-img-top" alt="pS_image"/>

                   <div className="card-body my-card-text text-center">
                       <h6 className="card-title">{props.title}</h6>
                   </div>
               </div>
           </Link>
       </div>
    );
}
export default PopularSpecialities;