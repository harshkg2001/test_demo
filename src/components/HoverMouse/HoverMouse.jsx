import React, { useState } from 'react'
import './HoverMouse.css'

function HoverMouse()
{
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const n = letters.length;

    function randomNumber(n)
    {
        return Math.floor(Math.random()*n);
    }

    function randomString(val)
    {
        let st = "";
        for(let i=0; i<val; i++)
            st+=letters[randomNumber(n)];

        return st;
    }

    onmousemove = (e) => {
        let st = randomString(10000);
        setStr(st);

        setX(e.clientX);
        setY(e.clientY);
    }

    const [str, setStr] = useState('');
    return (
        <div className='Hovermouse'>
            <div 
                className='string'
                style={{'background-image': `radial-gradient(circle at ${x}px ${y}px, white 1%, pink 5%, purple 45%)`}}
            >
                {str}
            </div>
        </div>
    )
}

export default HoverMouse;
