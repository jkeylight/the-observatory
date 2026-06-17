import gsap from 'gsap';

export function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  const inner = cursor.querySelector('.cursor__inner') as HTMLElement;
  const ring = cursor.querySelector('.cursor__ring') as HTMLElement;
  const label = cursor.querySelector('.cursor__label') as HTMLElement;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;

    cursorX += dx * 0.15;
    cursorY += dy * 0.15;

    gsap.set(cursor, { x: cursorX, y: cursorY });

    requestAnimationFrame(animate);
  }
  animate();

  // Hover states
  const interactiveElements = document.querySelectorAll('a, button, [data-cursor]');
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor--hovering');
      const cursorLabel = el.getAttribute('data-cursor');
      if (cursorLabel && label) {
        label.textContent = cursorLabel;
      }
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor--hovering');
      if (label) {
        label.textContent = 'Observing';
      }
    });
  });

  // Section-based cursor labels
  const sectionLabels: Record<string, string> = {
    arrival: 'Observing',
    mountain: 'Tracking',
    observatory: 'Recording',
    'observation-log': 'Researching',
    subject: 'Discovering',
    'star-archive': 'Mapping',
    signals: 'Receiving',
    patterns: 'Analyzing',
    alignments: 'Aligning',
    'long-night': 'Waiting',
    restricted: 'Classified',
    phenomenon: 'Recognizing',
    final: 'Converging',
    conclusion: 'Accepted',
    continues: 'Observing',
  };

  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => {
    const sectionName = section.getAttribute('data-section');
    if (!sectionName) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && label) {
            label.textContent = sectionLabels[sectionName] || 'Observing';
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(section);
  });
}
