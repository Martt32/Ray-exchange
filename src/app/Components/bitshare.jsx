import Lottie from 'lottie-react'
import animationData from '../Assets/animation_1.json'

import React from 'react'

const Bitshare = () => {
  return (
        <div className='flex justify-center items-center md:w-1/3'>
            <Lottie animationData={animationData}/>
          </div>
  )
}

export default Bitshare