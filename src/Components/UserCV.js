import React from "react";
import PersonalInfo from "./PersonalInfo";
import Contacts from "./Contacts";
import Experience from "./Experience";
import "./UserCV.css";
function UserCV() {
    return (
      <div>
        <div className="container">
        <PersonalInfo />
        <Contacts />
        <Experience />
        </div>
        <br/><br/><br/><br/><br/><br/>
        <marquee>CV'lərin hazırlanması üçün müraciət edə bilərsiniz</marquee>
      </div>
    );
  }
  
  export default UserCV;