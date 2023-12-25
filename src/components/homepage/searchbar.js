import React from "react";
import "./searchbar.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
const SearchBar = () => {

    const history = useNavigate("/")

    return <div className="search-bar">
        <div className="search-bar-left">
            <input className="search-bar-input" placeholder="Search ..." />
        </div>
        <div className="search-bar-right">
            <IconButton style={{color:"black"}}>
            <ShoppingCartOutlinedIcon sx={{ "&:hover": { cursor: "pointer" } }} />

            </IconButton>
            <IconButton className="avatar_button" style={{color:"black"}}  onClick={()=>{history("/login")}}>
                <AccountCircleIcon sx={{ transform: "scale(1.5)", margin: "0 25px", "&:hover": { cursor: "pointer" } }} />
            </IconButton>
        </div>

    </div>
}

export default SearchBar;