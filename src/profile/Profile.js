import React from 'react'
import { PropTypes } from "prop-types";

const Profile = (props) =>{
    const styleH1={color:'#ae4e62',fontSize:'2em',letterSpacing:'0.1em',paddingTop:'1.5em'}
    const styleP={color:'white',fontSize:'1em'}
    const styleB={color:'white', fontSize:'1em', backgroundColor:'#ae4e62',borderRadius:'0.5em', padding:'0.5em',border:0}
     
    return (
        <div>
            <h1 style={styleH1}>Name</h1>
            <p style={styleP}>{props.fullName}</p>
            <button onClick={props.handleName} style={styleB}>Click here</button>
            <h1 style={styleH1}>Bio</h1>
            <p style={styleP}>{props.bio}</p>
            <h1 style={styleH1}>The band pic</h1>
            {props.children}
        </div>
    );
}

Profile.defaultProps={
    fullName: "full name",
    bio: "biography"
}

Profile.propTypes={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    handleName: PropTypes.func
}

export default Profile;
