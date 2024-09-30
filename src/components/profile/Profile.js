import React, { useEffect, useState } from 'react'
import "../profile/Profile.css";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {
    const [formData,setFormData] = useState({
        name:"",
        lname:"",
        email:"",
        number:"",
        password:"",
        confirmPassword:""
    });

    const [storage,setStorage] = useState(); 
    const navigate =useNavigate();

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
        // console.log(formData);
    }

    const handleCLick = (e)=>{
        e.preventDefault();
        if(!formData.name || !formData.lname || !formData.email || !formData.number || !formData.password || !formData.confirmPassword){
          return toast.error("All fields are compulsary")  
        }
        if(formData.password !== formData.confirmPassword){
            return toast.error("password and confirmPassword are in correct!")
        }


        navigate("/next");
        console.log("onclick",formData);// check data coming from inputs 
        localStorage.setItem("profile",JSON.stringify(formData));// set the data in local stoarge
    }

    useEffect(()=>{
        const data = localStorage.getItem("profile")
        if (data) {
            setStorage(JSON.parse(data));  
        }
    },[]);

    console.log(storage); // this data is coming from localstoarge

  return (
    <>
     <div className='profileMain'>
        <div className='profileSub'>
        <p>Step 1</p>
            <h1>Your Profile</h1>
            <p>Enter the login information for your account. You will <br />
                be able to create additional users after registration.
            </p>
        </div>

        <form className='mrgin'>
            <div className='subForm'>
                <div>
                <label >First Name<sup>*</sup></label><br />
                <input type="text" name='name' value={formData.name} 
                    onChange={handleChange} placeholder='Enter Your First Name'/>
                </div>

                <div>
                <label >Last Name<sup>*</sup></label><br />
                <input type="text" name='lname' value={formData.lname} 
                  onChange={handleChange} placeholder='Enter Your Last Name'/>
                </div>

            </div>

            <div className='subForm'>
                <div>
                <label >Email<sup>*</sup></label><br />
                <input type="text" name='email' value={formData.email}
                    onChange={handleChange} placeholder='Enter Your Email'/>
                </div>

                <div>
                <label >Phone Number<sup>*</sup></label><br />
                <input type="text" name='number' value={formData.number} 
                    onChange={handleChange} placeholder='Enter Your Number'/>
                </div>

            </div>

            <div className='subForm'>
                <div>
                <label >Password<sup>*</sup></label><br />
                <input type="text" name='password' value={formData.password} 
                   onChange={handleChange} placeholder='Enter Your Password'/>
                </div>

                <div>
                <label >Confirm Password<sup>*</sup></label><br />
                <input type="text" name='confirmPassword' value={formData.confirmPassword} 
                    onChange={handleChange} placeholder='Enter Your Confirm Password'/>
                </div>

            </div>
        </form >

     </div>
     <div className='profileBtn'>
        <button className='btnn'>Back to Login</button>
        <button onClick={handleCLick} className='btn'><Link className='link'>Next Step</Link></button>
     </div>
    </>
  )
}

export default Profile
