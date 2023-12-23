import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Timetext()
{
    const [text, setText] = useState('');
    const [cnt, setCnt] = useState(0);
    let st = "Frontend-Developer";
    let n = st.length, time = 100;

    console.log(n);

    async function wait(time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('');
            }, time);
        })
    }

    async function print(st) {
        for (let i = 0; i < n; i++) {
            await wait(time);
            setText((prev) => (prev.concat(st[i])));
        }
        
        for (let i = 0; i < n; i++) {
            await wait(time);
            setText((prev) => (prev.slice(0, -1)));
        }
        setCnt((prev) => prev+1);
    }

    useEffect(() => {
        print(st);
    }, [cnt]);

    return (
        <div>
            <div className="text">
                {text}
            </div>
        </div>
    )
}

export default Timetext;
