import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initConstellationNav() {
  const nav = document.getElementById('constellationNav');
  const stars = nav?.querySelectorAll('.constellation-nav__star');
  const sections = document.querySelectorAll('.section');

  if (!nav || !stars) return;

  // Show nav after scrolling past arrival
  ScrollTrigger.create({
    trigger: '#section-1',
    start: 'top 80%',
    onEnter: () => nav.classList.add('visible'),
    onLeaveBack: () => nav.classList.remove('visible'),
  });

  // Track active section
  sections.forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => updateActiveStar(i),
      onEnterBack: () => updateActiveStar(i),
    });
  });

  function updateActiveStar(index: number) {
    if (!stars) return;
    stars.forEach((star) => star.classList.remove('active'));
    stars[index]?.classList.add('active');
  }

  // Click to scroll
  stars?.forEach((star) => {
    star.addEventListener('click', () => {
      const sectionIndex = parseInt(star.getAttribute('data-section') || '0');
      const target = sections[sectionIndex];
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Draw constellation lines
  if (stars) drawConstellationLines(stars);
}

function drawConstellationLines(stars: NodeListOf<Element>) {
  const svg = document.querySelector('.constellation-nav__lines') as SVGElement;
  if (!svg) return;

  const positions: { x: number; y: number }[] = [];
  stars.forEach((star) => {
    const rect = star.getBoundingClientRect();
    const svgRect = svg.getBoundingClientRect();
    positions.push({
      x: 0,
      y: rect.top - svgRect.top + rect.height / 2,
    });
  });

  if (positions.length < 2) return;

  let pathD = `M 0 ${positions[0].y}`;
  for (let i = 1; i < positions.length; i++) {
    pathD += ` L 0 ${positions[i].y}`;
  }

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', pathD);
  path.setAttribute('stroke', 'rgba(191, 197, 207, 0.1)');
  path.setAttribute('stroke-width', '1');
  path.setAttribute('fill', 'none');
  svg.appendChild(path);
}
