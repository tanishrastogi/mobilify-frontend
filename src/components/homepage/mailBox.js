import React from "react";
import "./mailBox.css";
import "./../entrance/entrance.css";

const MailBox = () => {

    
    // action="https://formspree.io/f/mrgnzalj"
    return <div className="mail">
        <div className="mail-box">
            <form  method="POST">
                <h2>Share your suggestions Directly with our  Developer</h2>
                <input type="text" name="Name" placeholder="Name: " required/>
                <input type="email" name="Email" placeholder="Email: " required/>
                <input style={{ marginBottom: "30px" }} name="Subject" type="text" placeholder="Subject: " required/>
                <textarea name="message" rows='4' placeholder="how can we help you?" required></textarea>
                <button className="submit-button">Send</button>
            </form>
        </div>
        <script src="https://smtpjs.com/v3/smtp.js">

        </script>
    </div>
}

export default MailBox;