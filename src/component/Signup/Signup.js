import React ,{useState} from 'react';
import { useNavigate} from 'react-router-dom';
// import './Signup.css';


const url = "http://3.17.216.66:5000/api/auth/register"



export default function Signup (){

    let navigate = useNavigate();
    
    const initialValues = {
        name : "Sakshi",
        email : "sakshirah@gmail.com",
        password : "rah@123",
        phone : "1234567892"
    }

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues(
            {
                ...values,
                [name] : value,
            });
    };

    const checkout = () => {
        console.log(values)
        fetch(url,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate(`/login`))
    }

    return(
        <>
        <div class="main-container">
        <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>   <span></span> <span></span> <span></span> <span></span> <span></span> 
    
            <div class="signin"> 
                <div class="content"> 
                    <h2>Register</h2> 
                        <div class="form"> 
                            <div class="inputBox"> 
                                <input type="text" value={values.name} onChange={handleInputChange}  required/> <i>Username</i> 
                            </div> 

                            <div class="inputBox"> 
                                <input type="email" value={values.email} onChange={handleInputChange} required/> <i>Email</i> 
                            </div> 
    
                            <div class="inputBox"> 
                                <input type="password" value={values.password} onChange={handleInputChange} required/> <i>Password</i> 
                            </div> 

                            <div class="inputBox"> 
                                <input type="text" value={values.phone} onChange={handleInputChange} required/> <i>Phone No</i> 
                            </div> 
    
                            <div class="inputBox"> 
                                <input type="submit" onClick={checkout} value="Sign Up"/> 
                            </div> 
    
                        </div> 
                    </div> 
                </div> 
            </section> 
        </div>
        </>
    )
}