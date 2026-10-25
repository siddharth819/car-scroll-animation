import { useRef } from 'react';
import Car from './Car.jsx';
import StatCard from './StatCard.jsx';
import useHeroAnimation from '../hooks/useHeroAnimation.js';
import { STATS } from '../data/stats.js';

const SKYLINE = [38,62,45,80,52,95,40,70,58,88,46,66,100,50,74,42,84,56,92,48,68,60,78,44,90,54];

export default function Hero() {
  const root = useRef(null);
  useHeroAnimation(root);

  return (
    <section ref={root} className="hero relative isolate h-screen h-svh overflow-hidden">
      <div className="orb absolute left-1/2 top-1/2 -z-10 -ml-[40vmin] -mt-[40vmin] h-[80vmin] w-[80vmin] rounded-full will-change-transform" />

      <div className="sky absolute bottom-0 left-0 -z-10 flex h-[30vh] w-[130%] items-end gap-[.6vw] will-change-transform">
        {SKYLINE.map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t-[3px] bg-gradient-to-b from-[#34205f] to-[#241448]" />
        ))}
      </div>

      {/* Road. The green layer holds the headline and is revealed behind the car */}
      <div className="strip absolute inset-x-0 top-1/2 -mt-[13vh] h-[26vh] origin-left overflow-hidden bg-asphalt shadow-[0_0_0_3px_#0c0817,0_24px_60px_rgba(0,0,0,.45)]">
        <div className="lane absolute left-0 h-1.5 w-[calc(100%+1800px)] opacity-80 will-change-transform" />
        <div className="mask absolute inset-0 overflow-hidden will-change-transform">
          <div className="green absolute inset-0 flex items-center justify-center bg-gradient-to-r from-aqua via-lime to-sun will-change-transform">
            <h1 className="m-0 whitespace-nowrap text-[9vw] font-extrabold leading-none tracking-[.02em] text-ink max-md:text-[10.5vw] max-md:tracking-normal">
              WELCOME ITZFIZZ
            </h1>
          </div>
        </div>
      </div>

      <div className="car-wrap absolute left-0 top-1/2 -mt-[12vh] h-[24vh]">
        <Car />
      </div>

      {STATS.map((s) => <StatCard key={s.id} stat={s} />)}

      <p className="cue absolute inset-x-0 bottom-[1.8vh] text-center text-[.85rem] tracking-[.06em] text-paper/70">
        Scroll to drive
      </p>
    </section>
  );
}
