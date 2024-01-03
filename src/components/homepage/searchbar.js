import React from "react";
import "./searchbar.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {

    const history = useNavigate("/")

    return <div className="search-bar">
        <div className="search-bar-left">
            <input className="search-bar-input" placeholder="Search ..." ></input>
            <div className="search-icon">
                <SearchIcon />
            </div>
        </div>
        <div className="search-bar-middle display-none">
            <ul className="search-bar-middle">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>More Products</li>
            </ul>
        </div>
        <div className="search-bar-right">
            <IconButton style={{ color: "black" }}>
                <ShoppingCartOutlinedIcon sx={{ "&:hover": { cursor: "pointer" } }} />
            </IconButton>
            <IconButton className="avatar_button" style={{ color: "black" }} onClick={() => { history("/login") }}>
                <AccountCircleIcon sx={{ transform: "scale(1.5)", margin: "0 25px", "&:hover": { cursor: "pointer" } }} />
            </IconButton>
        </div>

    </div>
}

export default SearchBar;