// Progressive enhancement only: content is fully visible without this file.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);

// Gentle reveal for below-the-fold blocks. Never applied to .answer / .buy.
const els = gsap.utils.toArray<HTMLElement>('[data-reveal]').filter(
  (el) => !el.closest('.answer, .buy') && el.getBoundingClientRect().top > window.innerHeight
);
els.forEach((el) => {
  gsap.from(el, { y: 18, opacity: 0, duration: 0.7, ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
});

// Cartridge diagram: dimension lines draw in; the cartridge itself and labels stay put.
document.querySelectorAll<SVGGElement>('.diagram .dim line').forEach((ln, i) => {
  const len = Math.hypot(+ln.getAttribute('x2')! - +ln.getAttribute('x1')!, +ln.getAttribute('y2')! - +ln.getAttribute('y1')!) || 1;
  gsap.fromTo(ln, { strokeDasharray: len, strokeDashoffset: len },
    { strokeDashoffset: 0, duration: 0.9, delay: 0.15 + i * 0.06, ease: 'power2.inOut',
      scrollTrigger: { trigger: ln.closest('.diagram')!, start: 'top 90%', once: true } });
});
document.querySelectorAll<SVGLineElement>('.diagram .pleat').forEach((ln, i) => {
  gsap.from(ln, { opacity: 0.15, duration: 0.5, delay: i * 0.025, ease: 'none',
    scrollTrigger: { trigger: ln.closest('.diagram')!, start: 'top 90%', once: true } });
});
