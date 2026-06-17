import SplitType from 'split-type';

export function initSplitText() {
  const titleElements = document.querySelectorAll('.arrival__title .split-line, .section__title, .phenomenon__subject-name, .final__conclusion');

  titleElements.forEach((el) => {
    new SplitType(el as HTMLElement, {
      types: 'lines,words',
      lineClass: 'split-line',
      wordClass: 'split-word',
    });
  });
}
