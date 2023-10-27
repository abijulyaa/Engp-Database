import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation';
import axios from 'axios';



const Signup = () => {
    const [values,setValues]= useState({
        name: '',
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({

    })
    const handleInput=(event) =>{
        setValues(prev =>({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errs = Validation(values);
            setErrors(errs);
        if(errs.name === "" && errs.email === "" && errs.password=== ""){
            axios.post('http://localhost:8081/register',values)
            .then(res => {
                navigate('/');
            })
            .catch(errs => console.log(errs));
        }
    } 


  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 '>
        <div className='bg-white p-3 rounded w-25'>
            <h3>Sign Up</h3>
            <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="text" placeholder="Enter Full Name" name='name' onChange={handleInput} className='form-control rounded-0'/>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" name='email' onChange={handleInput} className='form-control rounded-0'/> 
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name='password' onChange={handleInput} className='form-control rounded-0'/> 
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit'className='btn btn-success w-100'> <strong>Register</strong> </button>
                <p>If you have Account Go back to</p>   
                <Link to="/" className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup