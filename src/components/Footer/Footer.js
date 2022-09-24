import React from "react";
import "./Footer.css"

class Footer extends React.Component{
    constructor(props){
        
        super()
        console.log("working")
    }
    
    render(){
        return (
            <div className="footer container-fluid text-light px-5 py-5 d-flex flex-column gap-5 flex-md-row align-items-start justify-content-between">
                <div className="d-flex flex-column group">
                    <p className="font-1">CORPORATE</p>
                    <a href="#">Corporate</a>
                    <a href="#">Careers</a>
                    <a href="#">Community</a>
                    <a href="#">Contact</a>
                </div>
                <div className="d-flex flex-column group">
                    <p className="font-1">WWE.COM</p>
                    <a href="#">WWE News</a>
                    <a href="#">WWE Videos</a>
                    <a href="#">WWE Photos</a>
                    <a href="#">WWE Worldwide</a>
                    <a href="#">Priority Pass</a>
                </div>
                <div className="d-flex flex-column group">
                    <p className="font-1">ABOUT</p>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Copyrights</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Cookie Preferences</a>
                    <a href="#">Do Not Sell My Info</a>
                </div>
                <div className="d-flex flex-column group">
                    <p className="font-1">HELP</p>
                    <a href="#">Security</a>
                    <a href="#">Help Center</a>
                    <a href="#">Redeem Gift Card</a>
                    <a href="#">Cookie Policity</a>
                    <a href="#">Closed Captions</a>
                </div>
                <div className="d-flex flex-column group">
                    <p className="font-1">GLOBAL SITES</p>
                    <a href="#">Spanish</a>
                    <a href="#">Arabic</a>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/WWE_Logo.svg/841px-WWE_Logo.svg.png" width="50" height="50" alt="cam"/>

            </div>
        );
    }
}


export default Footer;