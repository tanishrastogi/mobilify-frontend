import react, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from "react-router-dom"
import "./navbar.css";
import { SideBar } from "./sidebar";
import CancelIcon from '@mui/icons-material/Cancel';
import styled from "@emotion/styled";
import Footer from "../homepage/footer";
import SearchBar from "../homepage/searchbar";

const Navbar = () => {

    const [sideBar, setSideBar] = useState(false);

    const handleSideBar = () => {
        setSideBar(!sideBar)
    };

    const HoverMenuIcon = styled(MenuIcon)({
        cursor: 'pointer',
        transition: 'transform 0.3 ease',
        "&:hover": {
            transform: 'scale(1.2)'
        }
    });


    const HoverCancelIcon = styled(CancelIcon)({
        cursor: 'pointer',
        transition: 'transform 0.3 ease',
        "&:hover": {
            transform: 'scale(1.2)'
        }
    });



    return <div className="navbar" >
        <HoverMenuIcon onClick={handleSideBar} />

        <div className="hidden-navbar" >
            <nav style={{ boxShadow: "5px 1px 25px black" }} className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                <div className="cancelIcon">
                    <HoverCancelIcon onClick={handleSideBar} sx={{ cursor: "pointer", "&:hover": { transform: "scale:(1.2)" } }} />
                </div>
                <ul className="nav-menu-items">
                    {SideBar.map((item, index) => {
                        return (
                            <li key={index} onClick={handleSideBar} className={item.cName + " hiddenNav-item"}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}

                </ul>
            </nav>
        </div>
        <h2>Mobile Hub</h2>


        <div className="entrance">
            <NavLink to="/login" ><button style={{ width: "80px" }} className="signup_btn">login</button></NavLink>
            <NavLink to="/signup"><button style={{ width: "80px", }} className="signup_btn">SignUp</button></NavLink>
        </div>
    </div>
}

export default Navbar;