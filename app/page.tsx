import MotionOverview from './motion/overview/MotionOverview';
import MotionLayout from './motion/layout/MotionLayout';

export default function Home() {
 return (
  <div className='p-4'>
   <div className='uppercase text-center text-3xl font-bold border-b border-b-neutral-400 pb-4 mb-8'>
    <h1>motion and animation</h1>
   </div>
   <MotionOverview />
   <MotionLayout />
  </div>
 );
}
