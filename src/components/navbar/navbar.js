import react, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from "react-router-dom"
import "./navbar.css";
import { SideBar } from "./sidebar";
import CancelIcon from '@mui/icons-material/Cancel';
import styled from "@emotion/styled";
import Footer from "../homepage/footer";
import SearchBar from "../homepage/searchbar";
import MySideBar from "./side_Bar";

const Navbar = () => {

    

    


    


    return <div className="navbar" style={{boxShadow:"1px 5px 15px black" , background:"#060b26"}}>

        <MySideBar />    
        <h2>Mobile Hub</h2>


        <div className="entrance">
            <NavLink to="/login" ><button style={{ width: "80px" }} className="signup_btn">login</button></NavLink>
            <NavLink to="/signup"><button style={{ width: "80px", }} className="signup_btn">SignUp</button></NavLink>
        </div>
    </div>
}

export default Navbar;