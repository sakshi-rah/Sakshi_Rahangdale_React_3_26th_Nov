import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./component/Login/Login";
import Signup from "./component/Signup/Signup";
import Profile from "./component/Profile/Profile";


function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to='/login' replace />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/signup' element={<Signup />}></Route>
                        <Route path='/profile' element={<Profile />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>

    )

}


export default App;
