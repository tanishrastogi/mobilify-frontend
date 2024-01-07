import React from "react";
import "./navbar.css";

const MySideBar = ()=>{
    return <div className="hidden-navbar" >
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
}

export default MySideBar;