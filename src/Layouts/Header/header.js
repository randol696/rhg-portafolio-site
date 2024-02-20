import React from 'react';
import { personalData } from './personalData.js';

function HeaderSideBar(){
    return(
        <div class="personalInfo-leftSide">
            <div className="personalInfo-container">
                <PersonalInfo />
            </div>

            <ul className="link-profile">
                <li><a href="_blank"><i class="fi fi-brands-github"></i></a></li>
                <li><a href="_blank"><i class="fi fi-brands-linkedin"></i></a></li>
                <li><a href="_blank"><i class="fi fi-ss-display-code"></i></a></li>
                <li><a href="_blank"><i class="fi fi-brands-instagram"></i></a></li>
                <li><a href="_blank"><i class="fi fi-brands-twitter-alt-square"></i></a></li>
            </ul>
           
        </div>
    );
}



function PersonalInfo(){
    return (
        <div>
        <p>{personalData[0].carrier}</p>
        <p>{personalData[0].info}</p>
    </div>
    ); 
}
export default HeaderSideBar; 