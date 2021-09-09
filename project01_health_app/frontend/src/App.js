
import './bootstrap.css';
import LandingPage from "./components/pageLayouts/LandingPage";
import {Provider} from "react-redux";
import store from "./StoreForHealthApp";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import React from "react";
import RegisterForm from "./components/pageLayouts/LoginReg/RegisterForm";
import LoginForm from "./components/pageLayouts/LoginReg/LoginForm";
import Home from "./components/pageLayouts/Home";
import PopularSpecialitiesList from "./components/pageLayouts/PopularSpecialities/PopularSpecialitiesList";
import DoctorsList from "./components/pageLayouts/Doctors/DoctorsList";
import DoctorProfile from "./components/pageLayouts/Doctors/DoctorProfile";
import SelectTimeSlot from "./components/pageLayouts/Doctors/SelectTimeSlot";
import ConfirmAppointment from "./components/pageLayouts/Doctors/ConfirmAppointment";
import Welcome from "./components/pageLayouts/Welcome";



function App() {


  return (

      <Provider store={store}>
        <div className="m-3 p-1">

            <Router>
                <Switch>
                    <Route path='/' exact> <LandingPage><Home /></LandingPage> </Route>
                    <Route path='/register'><LandingPage> <RegisterForm /> </LandingPage></Route>
                    <Route path='/login'><LandingPage> <LoginForm /></LandingPage> </Route>
                    <Route path='/welcome'><LandingPage> <Welcome /></LandingPage> </Route>
                    <Route path='/popularSpecialities'><LandingPage> <PopularSpecialitiesList /></LandingPage> </Route>
                    <Route path='/doctors'><LandingPage><DoctorsList /> </LandingPage></Route>
                    <Route path='/doctorProfile'><LandingPage><DoctorProfile /></LandingPage></Route>
                    <Route path='/selectTimeslot'><LandingPage> <SelectTimeSlot /> </LandingPage></Route>
                    <Route path='/confirmAppointment'><LandingPage> <ConfirmAppointment /> </LandingPage></Route>
                </Switch>
            </Router>
        </div>
      </Provider>
  );
}

export default App;
