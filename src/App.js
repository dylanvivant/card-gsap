import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

import Img from './image/david-becker-YPgwPz8GpdI-unsplash.webp'
import './index.css';

function App() {
  const [toggle, setToggle] = useState(false);

  const changeState = () => {
    setToggle(!toggle)
  }

  const cardRef = useRef(null);

  useEffect(() => {

    gsap.to(cardRef.current, {
      x: 2550, // Position finale où tu veux que l'élément apparaisse
      duration: 2, // Durée de l'animation
      ease: "power4.out",
      opacity: 1
    })

  }, []);


  return (
    <div className="App">
      <section className="card"
        ref={cardRef}
      >
        <div className="header">
          <img src={Img} alt="" width={600} height={300} />
        </div>
        <div className="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ipsum voluptatum exercitationem, architecto vitae harum incidunt temporibus magnam quis odio quidem omnis ipsa possimus, dolorum nesciunt modi fuga? Harum, incidunt.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
