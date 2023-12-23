import React, { useState } from 'react'
import './AnimateDiv.css'
import { motion } from 'framer-motion'

function AnimateDiv()
{
    const [x, setX] = useState(0);
    const [divs, setDivs] = useState([]);

    onmousemove = (e) => {
        setX(e.clientX);
        const newDiv = (
            <motion.div
                className='circle'
                style={{'left': `${x}px`}}
                animate={{ 
                    y: [0, -80, 0]
                }}
                transition={{ 
                    ease: 'easeInOut',
                    duration: 2,
                    // repeatType: 'loop',
                    // repeat: Infinity
                }}
            />
        );

        setDivs((prev) => ([...prev, newDiv]));
    }

    return (
        <div className='Animate'>
            {
                divs.map((motionDivs) => motionDivs)
            }
        </div>
    )
}

export default AnimateDiv
