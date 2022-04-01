import { useEffect, useState } from 'react';

export default function useHover(text) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileFilter, setMobileFilter] = useState(true);
  console.log(windowWidth, mobileFilter);
  // OBSERVE WINDOW WIDTH

  useEffect(() => {
    const updateWindowWidth = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };
    if (windowWidth < 440) {
      setMobileFilter(false);
    }

    if (windowWidth > 440) {
      setMobileFilter(true);
    }
    window.addEventListener('resize', updateWindowWidth);
  }, [windowWidth]);

  const showDescription = (e) => {
    let p = document.createElement('p');

    p.setAttribute('id', 'hover'); //<p id="hover"></p>
    p.style.width = `calc(${windowWidth}  / 100vw)`;
    p.style.position = 'absolute';
    p.style.top = '0px';
    p.style.left = '0px';
    p.style.padding = '1rem';
    p.style.color = '#eae2b7';
    p.style.boxShadow =
      // eslint-disable-next-line max-len
      '0px 0px 2.2px rgba(0, 0, 0, 0.019), 0px 0px 4.8px rgba(0, 0, 0, 0.028),0px 0px 8.1px rgba(0, 0, 0, 0.034), 0px 0px 12.2px rgba(0, 0, 0, 0.04), 0px 0px 17.7px rgba(0, 0, 0, 0.045), 0px 0px 25px rgba(0, 0, 0, 0.05), 0px 0px 35.4px rgba(0, 0, 0, 0.056), 0px 0px 51.5px rgba(0, 0, 0, 0.062), 0px 0px 79.3px rgba(0, 0, 0, 0.071), 0px 0px 141px rgba(0, 0, 0, 0.09)';
    p.style.fontFamily = 'Assistant, sans-serif';
    p.style.visibility = 'visible';
    p.style.backgroundColor = '#366178';
    p.style.opacity = '90%';
    p.style.border = '2px solid black';
    p.style.borderRadius = '10px';
    p.style.zIndex = '500';
    p.innerText = linkWithImgInfo.description;
    e.target.appendChild(p);

    p.addEventListener('mouseleave', () => {
      p.style.visibility = 'hidden';
    });
  };

  return showDescription();
}
