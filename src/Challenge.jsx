import React from 'react'
import './Challenge.css'
import { motion, transform } from 'framer-motion';
import { duration } from '@mui/material';

function Challenge() {
  let n = 10, k = 1;
  let arr = new Array(n);
  for (let i = 0; i < n; i++)
    arr[i] = new Array(n);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      arr[i][j] = k;
      k += 1;
    }
  }

  function clickHandler(val)
  {
    let element=document.getElementById(val);
    element.animate([
      {scale: 2,
      x: 1000}
    ])
  }

  return (
    <div className='challenge'>
      <div className="grid">
        {arr.map((row, ir) => {
          return (
            <div className="row" key={ir}>
              {row.map((val, ic) => {
                return (
                  <motion.div
                    className="circ" id={val}
                    whileHover={{
                      scale: [1, 1.2, 1],
                      transition: {
                        duration: 1,
                        ease: 'easeInOut'
                      },
                    }}
                    onClick={(val) => { clickHandler(val) }}
                  >
                    {val}
                  </motion.div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Challenge;