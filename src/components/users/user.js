import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../context/context";
import { useNavigate, useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Navbar from "../navbar/navbar";
import Footer from "../homepage/footer";
import { IconButton } from "@mui/material";
import "./users.css";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import MySideBar from "../navbar/side_Bar";
import SearchIcon from '@mui/icons-material/Search';

const User = () => {

    const [dropDown, setDropDown] = useState(false);
    const { username } = useParams();

    const history = useNavigate("/")
    const user_account = JSON.parse(localStorage.getItem('account'));

    if (!user_account) {
        alert("Log in First");
        history("/login");
    }
    else {
        if (user_account.username != username) {
            return <div style={{ width: "100%" }}>
                <Navbar />
                <h1 style={{ margin: "100px 30%", textAlign: "center" }}>
                    404 <br />Page not Found
                </h1>
            </div>
        }
    }


    const handleDropDown = () => {
        setDropDown(!dropDown);
        console.log(dropDown);
    }

    // console.log(account);
    return <div className="user_page_container" onClick={() => {
        if (dropDown) {
            handleDropDown();
        }
    }}>
        <div className="user_nav">
            <MySideBar color={"#060b26"} />
            <div className="searchBar">
                <div className="search-bar-left">
                    <input className="search-bar-input" placeholder="Search ..." ></input>
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                </div>
            </div>
            <div>
                <IconButton onClick={handleDropDown}>
                    <Avatar sx={{ bgcolor: "#060b26", color: "white", margin: "20px" }}>{user_account.username[0].toUpperCase()}</Avatar>
                </IconButton>
                <div className={dropDown ? 'dropDown active' : 'not-visible dropDown'}>
                    <ul>
                        <li><span>Profile</span><PersonIcon /></li>
                        <li><span>Cart</span><ShoppingCartIcon /></li>
                        <li><span>Wish List</span><FavoriteBorderIcon /></li>
                        <li><span>Logout</span><LogoutIcon /></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
}

export default User;