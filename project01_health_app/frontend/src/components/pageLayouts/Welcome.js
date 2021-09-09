import React, {useEffect} from "react";
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {useSelector} from "react-redux";
const Welcome = () => {
    const  history = useHistory();
    const isLoggedInOrNot = useSelector(state=>state.loginOrNot.isLoggedIn);

    useEffect(()=>{

        if (!isLoggedInOrNot){
            history.push('/');
        }
    })
    return(
        <div>

            {/*welcome section start*/}
            <section className="m-5 popularSpecialities">
                <h3>Alhamdulillah</h3>
                <p>You are LoggedIn now .</p>
            </section>
            {/*welcome section end*/}

        </div>
    );
}
export default Welcome;