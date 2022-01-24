import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      strings: ['Agile', 'Restless', 'Curious'],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='imgContainer'>
          <img src='assets/arush.png' alt='Arush' />
        </div>
      </div>
      <div className='right'>
        <div className='wrapper'>
          <h2>Hi There, I'm</h2>
          <h1>Ishan Das (Arush)</h1>
          <h3>
            Too much <span ref={textRef}></span>
          </h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  );
}
