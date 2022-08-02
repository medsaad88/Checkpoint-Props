import React from "react";
import "./App.css";
import Profile from "./profile/profile";
import PorfilPhoto from "./image/me.jpg";

const handleName = (name) => {
  alert(name);
};
const bio =
  "My Name is Med I'm a web dev working as frenlancer on upwrok with and agency based in the US";
const style = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  marginTop: "5%",
  objectFit: "cover",
  objectPosition: "0 -8px",
};

function App() {
  return (
    <React.Fragment>
      <Profile
        fullName="Med Saad Othman"
        bio={bio}
        profession="fullStack js"
        handleName={handleName}
      >
        <img src={PorfilPhoto} alt="logo" style={style} />
      </Profile>
      </React.Fragment>
    
  );
}

export default App;