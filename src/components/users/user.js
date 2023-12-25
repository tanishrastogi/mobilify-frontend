import React, { useContext, useEffect } from "react";
import { loginContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const User = ()=>{

    const history = useNavigate("/")

    const {isLoggedIn} = useContext(loginContext);

    useEffect(()=>{
        if(!isLoggedIn){
            alert("You are currently not logged in. Log in First.");
            history("/login");
        }
    } , [isLoggedIn]);

    return <h1>You are now logged in.</h1>
}

export default User;