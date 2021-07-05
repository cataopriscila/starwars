
import React from 'react';
//import { useState } from 'react';

const ReusableButton = ({ label, color, width, height, bgColor, brRadius, handleClick }) => {

    /*
    const [isToggled, setIsToggled] = useState(false);
    const toToggle = () => {
        setIsToggled(!isToggled);
        console.log("toggle", isToggled);

    }*/


    return (
        
            <button
            style = {{
                color: color,
                width: width,
                height: height,
                backgroundColor: bgColor,
                borderRadius: brRadius,
            }}
            onClick = {handleClick}
            >
            {label}
            </button>
        
    );
}

export default ReusableButton;
