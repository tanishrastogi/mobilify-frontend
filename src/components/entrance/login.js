import React, { useContext, useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import './entrance.css';
import { Link } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { loginContext } from "../context/context";

const Login = () => {

    const {setAccount , login} = useContext(loginContext);

    const [logData , setLogData] = useState({
        email:"",
        password:""
    });

    const history = useNavigate("/");

    const addData = (e)=>{
        const {name , value} = e.target;
        // console.log(name , value);
        setLogData(()=>{
            return {
                ...logData,
                [name]:value
            }
        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = logData;
        if(!email||!password){
            alert("fill all the details")
        }
        else{
            const res = await fetch("http://localhost:8005/login" , {
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({email:email , password:password})
             });
            
            
            const data = await res.json();
            localStorage.setItem('account' , JSON.stringify(data));
             console.log(data);

            if(res.status==201){
                alert("Login Successfull! Redirecting to your app!");
                login();
                setAccount(data);
                history(`/${data['username']}`);
            }
        }

        // const data = await res.json();


    }

    return <div className="loginform-container">
        <div className="login-form">
            <input type="text" value={logData.email} onChange={addData} name="email" placeholder="Enter Email " />
            <input type="password" value={logData.password} onChange={addData} name="password" placeholder="Enter password" />
            <button onClick={handleSubmit} className="submit-button">Log In &rarr;</button>
            <span>Forgot Password?</span>
            <span style={{color:"rgb(84, 82, 82)" , fontSize:"70%" , margin:"-20px 0 10px 0" }}>Don't have an account? Click here to <NavLink to="/signup">sign up</NavLink>. </span>
            <button className="login-with-google"><GoogleIcon /><span>Login With Google</span></button>
            <button className="login-with-github"><GitHubIcon /><span>Login With Github</span></button>
            <button className="login-with-facebook"><FacebookIcon /><span>Login With Facebook</span></button>
        </div>
    </div>
}

export default Login;