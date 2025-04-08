'use client';
import {
 motion,
 useScroll,
 useMotionValue,
 useTransform,
 animate,
} from 'motion/react';
import { useEffect } from 'react';

export default function MotionOverview() {
 const { scrollYProgress } = useScroll();
 const count = useMotionValue(0);
 const rounded = useTransform(() => Math.round(count.get()));

 useEffect(() => {
  const controls = animate(count, 100, { duration: 5 });
  return () => controls.stop();
 }, [count]);

 return (
  <div className='mb-8'>
   <motion.div>{rounded}</motion.div>
   <motion.div
    style={{
     scaleX: scrollYProgress,
     position: 'fixed',
     top: 0,
     left: 0,
     right: 0,
     height: 10,
     originX: 0,
     backgroundColor: '#ff0088',
    }}
   ></motion.div>
   <div className='mb-4'>
    <h2 className='font-medium text-2xl uppercase'>1) motion overview</h2>
   </div>
   <div>
    <div className='ms-20'>
     <motion.div
      animate={{
       rotate: 360,
      }}
      className='aspect-square w-[10rem] bg-gradient-to-b from-pink-500 to-pink-800 rounded-lg'
     ></motion.div>
     <div className='animate-infinite-rotation mt-20 aspect-square w-[10rem] bg-gradient-to-b from-pink-500 to-pink-800 rounded-lg'></div>
     <div className='animate-ping mt-20 aspect-square w-[5rem] bg-gradient-to-b from-pink-500 to-pink-800 rounded-full'></div>
     <motion.div
      animate={{ height: 'auto' }}
      className='mt-10 overflow-hidden h-[20px] border border-neutral-300 rounded-lg bg-neutral-300'
     >
      <div className='p-4'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum
       aspernatur nam possimus, veniam officia earum sint ullam autem quasi vel
       non ad. Incidunt unde nostrum reprehenderit, numquam, cumque aperiam
       omnis corporis iste modi eius molestiae fuga blanditiis quasi.
       Voluptatibus blanditiis cupiditate vero vitae neque molestiae. Beatae
       magnam dolores voluptatibus!
      </div>
     </motion.div>
     <motion.div
      initial={{
       opacity: 0,
      }}
      whileInView={{
       opacity: 1,
      }}
      viewport={{
       amount: 0.8,
      }}
      whileHover={{ scale: 1.2 }}
      onHoverStart={() => console.log('hovering element starts')}
      onHoverEnd={() => console.log('hovering element ends')}
      className='aspect-square w-[10rem] bg-gradient-to-b from-pink-500 to-pink-800 rounded-lg mt-20'
     ></motion.div>
    </div>
   </div>
  </div>
 );
}
