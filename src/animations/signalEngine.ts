import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initSignalEngine() {
  const waveforms = document.querySelectorAll('.signals__waveform');

  waveforms.forEach((waveform) => {
    // Create animated line inside waveform
    const line = document.createElement('div');
    line.style.cssText = `
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg,
        transparent,
        rgba(191, 197, 207, 0.3) 20%,
        transparent 40%,
        rgba(199, 162, 90, 0.4) 50%,
        transparent 60%,
        rgba(191, 197, 207, 0.2) 80%,
        transparent
      );
      transform: scaleX(0);
      transform-origin: left;
    `;
    waveform.appendChild(line);

    gsap.to(line, {
      scaleX: 1,
      duration: 3,
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: waveform,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      }
    });
  });

  // Signal flash effect on restricted section
  const restrictedSection = document.getElementById('section-10');
  if (restrictedSection) {
    const files = restrictedSection.querySelectorAll('.restricted__file');

    files.forEach((file, i) => {
      gsap.fromTo(file,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: file,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }
}
