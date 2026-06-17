import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initSkyScanner() {
  // Arrival parallax layers
  const arrival = document.querySelector('.section--arrival');
  if (arrival) {
    const clouds = arrival.querySelector('.section__parallax-layer--clouds');
    const signal = arrival.querySelector('.section__parallax-layer--signal');

    if (clouds) {
      gsap.to(clouds, {
        y: -100,
        opacity: 0.3,
        scrollTrigger: {
          trigger: arrival,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });
    }

    if (signal) {
      gsap.to(signal, {
        y: -60,
        opacity: 0.2,
        scrollTrigger: {
          trigger: arrival,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      });
    }
  }

  // Mountain images parallax
  const mountainImages = document.querySelectorAll('.mountain__image');
  mountainImages.forEach((img) => {
    const depth = parseFloat(img.getAttribute('data-parallax') || '0.05');
    gsap.to(img, {
      y: () => window.innerHeight * depth,
      scrollTrigger: {
        trigger: img,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      }
    });
  });

  // Observatory gallery reveal
  const obsGallery = document.querySelectorAll('.observatory__gallery-item');
  obsGallery.forEach((item, i) => {
    gsap.fromTo(item,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        delay: i * 0.1,
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Subject gallery stagger
  const subjectGallery = document.querySelectorAll('.subject__gallery-item');
  subjectGallery.forEach((item, i) => {
    gsap.fromTo(item,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Star archive grid animation
  const starArchive = document.querySelectorAll('.star-archive__item');
  starArchive.forEach((item, i) => {
    gsap.fromTo(item,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Alignment events reveal
  const alignmentEvents = document.querySelectorAll('.alignments__event');
  alignmentEvents.forEach((event, i) => {
    gsap.fromTo(event,
      { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
      {
        opacity: 0.6,
        x: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: event,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Long night entries
  const longNightEntries = document.querySelectorAll('.long-night__entry');
  longNightEntries.forEach((entry) => {
    gsap.fromTo(entry,
      { opacity: 0.3, x: -20 },
      {
        opacity: 0.7,
        x: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: entry,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });

  // Conclusion rows
  const conclusionRows = document.querySelectorAll('.conclusion__row');
  conclusionRows.forEach((row, i) => {
    gsap.fromTo(row,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: i * 0.15,
        scrollTrigger: {
          trigger: row,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      }
    );
  });
}
