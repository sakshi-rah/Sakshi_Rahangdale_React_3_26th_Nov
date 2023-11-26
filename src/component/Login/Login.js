import './Login.css';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const url = "http://3.17.216.66:5000/api/auth/login"

export default function Login (){

    let navigate = useNavigate();

    const initialValues = {
        email : 'sakshirah@gmail.com',
        password : 'rah@123'
    };

    const [values, setValues] = useState(initialValues);
    // const [message, setMessage] = useState();

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setValues({
            ...values, 
            [name] : value,
        });
    };


    const checkout = () => {
        console.log(values);
        fetch(url,{
            method:'POST',
            headers:{
                'accespt':'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/profile'))
        
    }

    return(
    <>
    <div class="main-container">
    <section> 

        <div class="signin"> 
            <div class="content"> 
                <h2>Log In Here</h2> 
                    <div class="form"> 
                        <div class="inputBox"> 
                            <input type="text" value={values.email} onChange={handleInputChange} required/> <i>Username</i> 
                        </div> 

                        <div class="inputBox"> 
                            <input type="password" value={values.password} onChange={handleInputChange} required/> <i>Password</i> 
                        </div> 

                        <div class="links"> 
                            <Link to="#"></Link> <Link to={`/signup`}>Signup</Link> 
                        </div> 

                        <div class="inputBox"> 
                            <input type="submit" onClick={checkout} value="Login"/> 
                        </div> 

                    </div> 
                </div> 
            </div> 
        </section> 
    </div>
    </>
    )
}