import React, { useState } from "react";
import './entrance.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from "react-router-dom";


const SignUp = ()=>{

    const [logData , setLogData] = useState({
        email:"",
        username:"",
        password:"",
        cpassword:""
    })

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {email , username , password , cpassword} = logData;
        if(!email || !username || !password || !cpassword){
            alert("fill all the details first");
        }
        else{
            if(password == cpassword){
                const res = await fetch("/skillapp/signup" , {
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({email:email ,username:username , password:password} )
                })

                const data = await res.json();
                console.log(data);
                if(data.error){
                    alert(data.error);
                }
            }
            else{
                alert("password and confirm password does not match");
            }
        }
    }

    const addData = (e)=>{
        const {name , value} = e.target
        // console.log(name , value);
        setLogData(()=>{
           return {
                ...logData,
                [name]:value
            }
        })
    }



    return  <div style={{height:"100vh"}} className="loginform-container">
    <div className="login-form">
        <input type="text" value={logData.email} onChange={addData} required name="email" placeholder="Enter Email " />
        <input type="text" value={logData.username} onChange={addData}  name="username" placeholder="Enter Username " />
        <input type="password" value={logData.password} onChange={addData}  name="password" placeholder="password" />
        <input type="password" value={logData.cpassword} onChange={addData} name="cpassword" placeholder="confirm password" />
        <button style={{margin:"20px  0 30px 0"}}  onClick={handleSubmit} className="signup-button submit-button">Sign Up &rarr;</button>
        <span style={{color:"rgb(84, 82, 82)" , fontSize:"70%" , margin:"-0px 0 10px 0" }}>Already have an account? Click here to <NavLink to="/login">Login</NavLink>. </span>
        <button className="login-with-google"><GoogleIcon /><span>Continue With Google</span></button>
        <button className="login-with-github"><GitHubIcon /><span>Continue With Github</span></button>
        <button className="login-with-facebook"><FacebookIcon /><span>Continue With Facebook</span></button>
    </div>
</div>
}

export default SignUp;