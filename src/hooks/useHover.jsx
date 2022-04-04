import { useEffect, useState } from 'react';

let textInput = '';
export default function useHover(input = textInput) {
  const newWidth = window.innerWidth;
  const [windowWidth, setWindowWidth] = useState(newWidth);

  // OBSERVE WINDOW WIDTH

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(newWidth);
    };
    window.addEventListener('resize', updateWindowWidth);
  }, [windowWidth]);

  function showDescription(e) {
    let p = document.createElement('p'); //<p></p>

    p.innerText = input; //attach text inside the html element
    p.setAttribute('id', 'hover'); //<p id="hover"></p>
    p.style.width = `calc(${windowWidth}  / 100vw)`; // makes element resizable
    p.style.position = 'absolute'; //style element
    p.style.top = '0px'; //style element
    p.style.left = '0px'; //style element
    p.style.padding = '1rem'; //style element
    p.style.color = '#eae2b7'; //style element
    p.style.boxShadow = //style element
      // eslint-disable-next-line max-len
      '0px 0px 2.2px rgba(0, 0, 0, 0.019), 0px 0px 4.8px rgba(0, 0, 0, 0.028),0px 0px 8.1px rgba(0, 0, 0, 0.034), 0px 0px 12.2px rgba(0, 0, 0, 0.04), 0px 0px 17.7px rgba(0, 0, 0, 0.045), 0px 0px 25px rgba(0, 0, 0, 0.05), 0px 0px 35.4px rgba(0, 0, 0, 0.056), 0px 0px 51.5px rgba(0, 0, 0, 0.062), 0px 0px 79.3px rgba(0, 0, 0, 0.071), 0px 0px 141px rgba(0, 0, 0, 0.09)';
    p.style.fontFamily = 'Assistant, sans-serif'; //style element
    p.style.visibility = 'visible'; //style element
    p.style.backgroundColor = '#366178'; //style element
    p.style.opacity = '90%'; //style element
    p.style.border = '2px solid black'; //style element
    p.style.borderRadius = '10px'; //style element
    p.style.zIndex = '500'; //style element

    e.target.appendChild(p); //

    p.addEventListener('mouseleave', () => {
      p.style.visibility = 'hidden';
    });
  }

  return { showDescription };
}
