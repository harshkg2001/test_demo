import React, { useEffect, useState } from 'react'
import './GradientText.css'
import { useTypewriter } from 'react-simple-typewriter';
function GradientText()
{
    const [text] = useTypewriter({
        words: ['Gradient-Text'],
        loop: {}
    })

    return (
        <div className='Gradient'>
            <div className='style'>
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            </div>
            <div className='text'>
                {"_"}{text}
            </div>
        </div>
    )
}

export default GradientText;
