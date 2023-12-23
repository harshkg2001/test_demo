import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './TypeWriter.css'

function TypeWriter()
{
    const [text] = useTypewriter({
        words: ['Frontend-Developer', 'Backend-Developer'],
        loop: {}
    })

    return (
        <div className='TypeWriter'>
            <div className='head'>
                TypeWriter : npm install react-simple-typewriter
            </div>
            <div className='bottom'>
                I am a {' '} 
                <span>{text}</span>
                <Cursor/>
            </div>
        </div>
    )
}

export default TypeWriter;
