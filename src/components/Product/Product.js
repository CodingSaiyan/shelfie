import React from 'react';

function Product(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
            <h4>{props.img}</h4>
        </div>
    )
}

export default Product