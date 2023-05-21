

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
  <Carousel dotPosition={'top'} autoplay>
    <div style={{backgroundImage : `url(${laptop})`,}} className="h-full w-full  ">
      <h3>1</h3>
        <Image src={laptop} alt=""  />
        <div className='w-full flex items-center justify-center'>
            <Button >
                Explore
                </Button>
                <Button >
                Gallery
            </Button>
        </div>
    </div>
    <div>
      <h3 style={{}}>2</h3>
      <Image src={laptop} alt=""  />
        <div className='w-full flex items-center justify-center '>
            <Button >
                Explore
                </Button>
                <Button >
                Gallery
            </Button>
        </div>
    </div>
    <div>
      <h3 style={{}}>3</h3>
      <Image src={laptop} alt=""  />
        <div className='w-full flex items-center justify-center '>
            <Button >
                Explore
                </Button>
                <Button >
                Gallery
            </Button>
        </div>
    </div>
    <div>
      <h3 style={{}}>4</h3>
      <Image src={laptop} alt="" />
        <div className='w-full flex items-center justify-center  '>
            <Button >
                Explore
                </Button>
                <Button >
                Gallery
            </Button>
        </div>
    </div>
  </Carousel>
);

export default App;



