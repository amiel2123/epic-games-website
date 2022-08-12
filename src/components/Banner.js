import React from 'react'
// CSS

import "../styles/components/Banner.css";

return <div className='banner_container>wahehehhe</div>'

// Images



import Banner1 from "../assets/images/1.jpg";
import Banner2 from "../assets/images/2.jpg";
import Banner3 from "../assets/images/3.jpg";

const Banner = () => {
  return (
    <div className= 'banner_container'>
        <div className='image_container'>
            <div className='overlay'></div>
            <div className='title'>Fortnite</div>
            <img className='banner_img' src={Banner1} />
        </div>
        <div className='image_container'>
            <div className='overlay'></div>
            <div className='title>Store</div>
            <img className=banner_img' src={Banner2} />
        </div>
        <div className= 'image_container'>
            <div className='overlay'></div>
            <div className='title'>Rocket League</div>   
            <img className='banner_img' src={Banner3} />
          </div>

 
    </div>

  );
};

export default Banner