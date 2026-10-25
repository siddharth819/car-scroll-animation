import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STATS } from '../data/stats.js';

gsap.registerPlugin(ScrollTrigger);

/**
 * 1) Intro: one time-based sequence on load.
 * 2) Scroll: one scrubbed timeline — everything is tied to scroll progress.
 * Only transforms/opacity are animated. gsap.context cleans up on unmount (React StrictMode safe).
 */
export default function useHeroAnimation(rootRef) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    const car = root.querySelector('.car');

    const ctx = gsap.context(() => {
      // ---------- Intro ----------
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.sky',      { y: 80, opacity: 0, duration: 1.1 })
        .from('.orb',      { scale: 0.6, opacity: 0, duration: 1.4 }, 0)
        .from('.strip',    { scaleX: 0, duration: 1, ease: 'power3.inOut' }, 0.15)
        .from('.car-wrap', { x: () => -window.innerWidth * 0.35, opacity: 0, duration: 1.1 }, '-=0.5')
        .from('.cue',      { opacity: 0, y: 10, duration: 0.6 }, '-=0.2');

      // ---------- Scroll ----------
      const cw = () => car.offsetWidth;
      const W = () => window.innerWidth;
      const x0 = () => W() * 0.01;
      const edge = (c) => c + cw() * 0.15; // where the green reveal ends (just behind the car)

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: { trigger: root, start: 'top top', end: '+=300%', pin: true, scrub: 1, invalidateOnRefresh: true },
      });

      tl.fromTo(car, { x: x0 }, { x: W, duration: 1 }, 0)
        // mask moves with the car, inner layer moves opposite → text stays put, only the reveal edge travels
        .fromTo('.mask',  { x: () => edge(x0()) - W() }, { x: () => cw() * 0.15, duration: 1 }, 0)
        .fromTo('.green', { x: () => W() - edge(x0()) }, { x: () => -cw() * 0.15, duration: 1 }, 0)
        .to('.lane', { x: -1800, duration: 1 }, 0)
        .fromTo('.sky', { x: 0 }, { x: () => -W() * 0.28, duration: 1 }, 0)
        .fromTo('.orb', { x: () => -W() * 0.2 }, { x: () => W() * 0.2, duration: 1 }, 0)
        .to('.cue', { opacity: 0, duration: 0.06 }, 0);

      STATS.forEach(({ id, at, y, rot }) =>
        tl.fromTo(
          `[data-stat="${id}"]`,
          { opacity: 0, y, scale: 0.8, rotation: rot - 8 },
          { opacity: 1, y: 0, scale: 1, rotation: rot, duration: 0.12, ease: 'back.out(1.6)' },
          at
        )
      );
    }, root);

    return () => ctx.revert();
  }, [rootRef]);
}
