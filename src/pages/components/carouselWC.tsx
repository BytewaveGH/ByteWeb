

import React from 'react';
import { Button, Carousel } from 'antd';
import laptop from '../../../public/laptops.jpg'
import Image from 'next/image';
// import Image from 'next/image';

// const contnetStyles: React.CSSProperties = {
    
//   height: '100%',
//   width: '100%',
//   color: '#000',
//   textAlign: 'center',
//   backgroundImage : `url(${laptop})`,
//   backgroundSize: 'cover',

// };

const App: React.FC = () => (
  <Carousel  autoplay>
    <div style={{backgroundImage : `url(${laptop})`,}} className="h-full w-full  ">
      <h3>1</h3>
        <Image src={laptop} alt=""  />
       
        
    </div>
    <div>
      <h3 style={{}}>2</h3>
      <Image src={laptop} alt=""  />
        
    </div>
    <div>
      <h3 style={{}}>3</h3>
      <Image src={laptop} alt=""  />
        
    </div>
    <div>
      <h3 style={{}}>4</h3>
      <Image src={laptop} alt="" />
       
    </div>
  </Carousel>
);

export default App;



