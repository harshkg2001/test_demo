import { useEffect } from 'react';
import './App.css';
import DropZone from './components/DropZone/DropZone';
import AnimateDiv from './components/FramerMotion/AnimateDiv';
import GradientText from './components/GradientText/GradientText';
import HoverMouse from './components/HoverMouse/HoverMouse';
import Mask from './components/Mask/Mask';
import TypeWriter from './components/TypeWriter/TypeWriter';
import Challenge from './Challenge';

function App()
{
  let cnt = 1;
  useEffect(() => {
    const parentDiv = document.getElementsByClassName('App');
    console.log(parentDiv);
  }, []);

  return (
    <div className="App" style={{'width':`${100}vw`}}>
      {/* <section>
        <TypeWriter/>
      </section> */}
      {/* <section>
        <GradientText/>
      </section> */}
      {/* <section>
        <DropZone/>
      </section> */}
      {/* <section>
        <HoverMouse/>
      </section> */}
      {/* <section>
        <Mask/>
      </section> */}
      <section>
        <AnimateDiv/>
      </section>
      {/* <section>
        <Challenge/>
      </section> */}
    </div>
  );
}

export default App;
