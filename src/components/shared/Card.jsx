import React from 'react'
import PropTypes from 'prop-types';

function Card({children}) {
    return (
   
        <div className="card" style={{
            backgroundColor:  "#fff",
            color: '#000',
        }}>
            {children}
        </div>
    )
}



Card.propTypes={
    children:PropTypes.node.isRequired,
}

export default Card
