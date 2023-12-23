import React, { useState } from 'react'
import './Mask.css'

function Mask()
{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    onmousemove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    return (
        <div
            className='Mask'
            style={{'background-image': `radial-gradient(circle at ${x}px ${y}px, white, pink 10%, purple)`}}
        />
    )
}

export default Mask;
