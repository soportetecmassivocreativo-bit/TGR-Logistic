import gsap from 'gsap';

export const animations = {
  fadeInUp: (element: string | Element, delay = 0) => {
    gsap.fromTo(
      element,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay, ease: 'power3.out' }
    );
  },
  
  staggerFadeInUp: (elements: string | NodeListOf<Element>, stagger = 0.1) => {
    gsap.fromTo(
      elements,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger, ease: 'power2.out' }
    );
  },

  parallaxImage: (image: string | Element, container: string | Element) => {
    gsap.fromTo(
      image,
      { y: '-10%' },
      {
        y: '10%',
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  },

  clipPathReveal: (element: string | Element) => {
    gsap.fromTo(
      element,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.5,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
        },
      }
    );
  }
};
