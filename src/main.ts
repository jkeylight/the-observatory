import { initLenis } from './animations/scrollEngine';
import { initRevealAnimations } from './animations/revealEngine';
import { initConstellationNav } from './animations/constellationNav';
import { initCursor } from './animations/cursorEngine';
import { initSplitText } from './animations/splitTextEngine';
import { initAlignmentEngine } from './animations/alignmentEngine';
import { initPhenomenonEngine } from './animations/phenomenonEngine';
import { initSignalEngine } from './animations/signalEngine';
import { initSkyScanner } from './animations/skyScanner';
import { initLoadingScreen } from './animations/loadingScreen';

import './styles/main.scss';

async function init() {
  document.body.classList.add('loading');

  await initLoadingScreen();

  const lenis = initLenis();
  initSplitText();
  initRevealAnimations();
  initConstellationNav();
  initCursor();
  initAlignmentEngine();
  initPhenomenonEngine();
  initSignalEngine();
  initSkyScanner();

  document.body.classList.remove('loading');

  document.getElementById('beginObservation')?.addEventListener('click', () => {
    const section1 = document.getElementById('section-1');
    if (section1) {
      lenis.scrollTo(section1, { offset: -100 });
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
