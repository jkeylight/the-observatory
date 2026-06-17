import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAlignmentEngine() {
  const finalSection = document.getElementById('section-12');
  if (!finalSection) return;

  const alignItems = finalSection.querySelectorAll('.final__align-item');

  alignItems.forEach((item, i) => {
    gsap.fromTo(item,
      { opacity: 0.3, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'top 40%',
          toggleActions: 'play none none reverse',
          scrub: 1,
        }
      }
    );

    // Add aligned class when fully revealed
    ScrollTrigger.create({
      trigger: item,
      start: 'top 50%',
      onEnter: () => item.classList.add('aligned'),
      onLeaveBack: () => item.classList.remove('aligned'),
    });
  });

  // Final conclusion scale animation
  const conclusion = finalSection.querySelector('.final__conclusion');
  if (conclusion) {
    gsap.fromTo(conclusion,
      { opacity: 0, scale: 0.8, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: conclusion,
          start: 'top 75%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
          scrub: 1,
        }
      }
    );
  }
}
