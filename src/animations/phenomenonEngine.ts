import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initPhenomenonEngine() {
  const section = document.getElementById('section-11');
  if (!section) return;

  const revelation = section.querySelector('.phenomenon__revelation');
  const subjectName = section.querySelector('.phenomenon__subject-name');

  if (revelation) {
    const findings = revelation.querySelectorAll('.phenomenon__finding, .phenomenon__observation, .phenomenon__conclusion');

    findings.forEach((finding, i) => {
      gsap.fromTo(finding,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: finding,
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse',
            scrub: 1,
          }
        }
      );
    });
  }

  if (subjectName) {
    const words = subjectName.querySelectorAll('.split-word');
    gsap.fromTo(words,
      { opacity: 0, y: 80, rotateX: 90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: subjectName,
          start: 'top 75%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
          scrub: 1,
        }
      }
    );
  }
}
