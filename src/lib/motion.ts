import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

/** Inizializza smooth scroll + reveal globali. No-op se l'utente riduce il motion. */
export function initMotion() {
  if (prefersReducedMotion()) {
    // I contenuti restano visibili: nessun reveal, nessuno smooth scroll
    document.documentElement.classList.add('reduced-motion');
    return;
  }

  lenis = new Lenis({ lerp: 0.12, anchors: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Reveal on scroll: qualsiasi elemento con [data-reveal]
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    const delay = Number(el.dataset.revealDelay ?? 0);
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 36 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      },
    );
  });

  // Magnetic buttons
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = 18;
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * strength;
      const y = ((e.clientY - r.top) / r.height - 0.5) * strength;
      gsap.to(el, { x, y, duration: 0.3, ease: 'power2.out' });
    });
    el.addEventListener('mouseleave', () =>
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' }),
    );
  });
}

export { gsap, ScrollTrigger };
