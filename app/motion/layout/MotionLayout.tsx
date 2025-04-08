'use client';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function MotionLayout() {
 const [isOn, setIsOn] = useState(false);
 return (
  <div>
   <div className='mb-4'>
    <h2 className='font-medium text-2xl uppercase'>2) motion layout</h2>
   </div>
   <div>
    <div
     className={`w-[10rem] h-[5rem] flex bg-teal-400 rounded-[3rem] p-4 ${
      isOn ? 'justify-end' : 'justify-start'
     }`}
     onClick={() => setIsOn(!isOn)}
    >
     <motion.div
      layout
      transition={{
       bounce: 50,
       stiffness: 20,
      }}
      className='rounded-full w-[3rem] aspect-square bg-red-600'
     ></motion.div>
    </div>
   </div>
  </div>
 );
}
