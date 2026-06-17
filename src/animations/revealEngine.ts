import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initRevealAnimations() {
  const sections = document.querySelectorAll('.section');

  sections.forEach((section) => {
    const header = section.querySelector('.section__header');
    const openingText = section.querySelector('.section__opening-text');
    const content = section.querySelectorAll('.section__content > *:not(.section__header):not(.section__opening-text)');

    if (header) {
      gsap.fromTo(header,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }

    if (openingText) {
      gsap.fromTo(openingText,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: openingText,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }

    content.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          delay: 0.1 + i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  });
}
