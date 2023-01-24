import React, { useEffect, useState } from 'react';
import './Loader.scss';

export default function Loader() {

    const [load, setLoad] = useState(true);

    useEffect(() => {
      const onPageLoad = () => {
        setLoad(false)
      }
  
      if(document.readyState === 'complete') {
        onPageLoad();
      } else {
        window.addEventListener('load', onPageLoad)
        return () => window.removeEventListener('load', onPageLoad)
      }
  
    }, [])

  return (

    <div className={`wrapper ${load ? '' : 'fade'}`}>
        <span class="loader"></span>

        <h1>Dev Romero</h1>
    </div>
  )
}
