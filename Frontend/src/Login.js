import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from'./LoginValidation';
import axios from "axios";
import './Components/Login/login.css';
import './Components/Login/util.css';

function Login() {
    const [values,setValues]= useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({

    })
    const handleInput=(event) =>{
        setValues(prev =>({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const errs = Validation(values);
            setErrors(errs);
        if(errs.email === "" && errs.password=== ""){
            axios.post('http://localhost:8081/login',values)
            .then(res => {
                if(res.data === "Success") {
                    navigate('/dashboard');
                } else {
                    alert ("No Record existed");
                }
            })
            .catch(errs => console.log(errs));
        }
    } 

  return (
    <div className='limiter'>
        <div className='container-login100'>
            <div className='wrap-login100'>
            
            <form className='login100-form validate-form p-l-55 p-r-55 p-t-178' action="" onSubmit={handleSubmit}>

            <span className='login100-form-title'>
						Login to eNGP Database
					</span>

                <div className='wrap-input100 validate-input m-b-16'>
                    <input type="email" placeholder="Email" name='email' onChange={handleInput} className='input100'/> 
                    {errors.email && <span className='focus-input100'>{errors.email}</span>}
                </div>

                <div className='wrap-input100 validate-input'>
                    <input type="password" placeholder="Password" name ='password' onChange={handleInput} className='input100'/> 
                    {errors.password && <span className='focus-input100'>{errors.password}</span>}
                </div>

                <div className='text-right p-t-13 p-b-23'>
						<Link to="#" className="txt2">
							 Forgot Password?
						</Link>
					</div>

                <div className='container-login100-form-btn'>
                <button type='submit' className='login100-form-btn'> 
                        Login
                </button>
                </div>

                <div className="flex-col-c p-t-170 p-b-40">
						<span className="txt1 p-b-9">
							Don’t have an account?
						</span>

						<Link to="./signup" className="txt3">
							Sign up now
						</Link>
					</div>

            </form>
            </div>
        </div>
    </div>
  )
}

export default Login