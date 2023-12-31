import React from "react";

const ItemAdd = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return <div>
        <div className="form-page form-page1">
            <input className="name" name="name"></input>
            <input className="category" name="category"></input>
            <input className="imageurl" name="imageurl"></input>
            <input className="price" name="price"></input>
            <input className="companyName" name="companyName"></input>
        </div>
        <div className="form-page form-page2">
            <input className="tagline" name="tagline"></input>
            <input className="description1" name="description1"></input>
            <input className="description2" name="description2"></input>
            <input className="description3" name="description3"></input>
            <input className="description4" name="description4"></input>
        </div>
    </div>
}

return ItemAdd;