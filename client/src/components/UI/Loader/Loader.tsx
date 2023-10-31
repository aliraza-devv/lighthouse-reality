import React from 'react';

import { LoaderSvg } from '../../../assets/svg';


const Loader: React.FC = () => {
  return (
    <div className='loader'>
        <img src={LoaderSvg} alt='loader' />
    </div>
  )
}

export default Loader;