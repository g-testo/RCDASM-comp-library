import React from 'react';

import './style.css';

const Button=({ text, handleClick, customClasses, disabled, theme, textColor })=>{
    let classesStr = "button";
    classesStr += " " + customClasses;
    theme && (classesStr += " " + theme);
    disabled && (classesStr += " disabled");
    return(
      <div style={{color: textColor}} className={classesStr} onClick={handleClick}>{text}</div>
    )
}

export { Button };