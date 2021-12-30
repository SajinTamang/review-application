import React from 'react'
import PropTypes from 'prop-types';

function Header({text,textColor,bgColor}) {
    const headerStyles= ({backgroundColor: bgColor, color: textColor});
    return (
        <header style={headerStyles}>
            <div className="container">
                <h2>Review {text}</h2>
            </div>
        </header>
    )
}


Header.defaultProps={
    text:"User Interface",
    bgColor: 'rgba(0,0,0,0.5)',
    textColor:'#ff6a95',
}


Header.propTypes ={
    text:PropTypes.string,
     bgColor: PropTypes.string,
    textColor:PropTypes.string,
}
export default Header
