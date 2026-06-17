import gsap from 'gsap';

export function initLoadingScreen(): Promise<void> {
  return new Promise((resolve) => {
    const loading = document.getElementById('loading');
    if (!loading) {
      resolve();
      return;
    }

    const statuses = loading.querySelectorAll('.loading-screen__status');

    // Wait for fonts and assets
    const checkReady = () => {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          completeLoading();
        });
      } else {
        setTimeout(completeLoading, 2500);
      }
    };

    const completeLoading = () => {
      gsap.to(statuses, {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          setTimeout(() => {
            gsap.to(loading, {
              opacity: 0,
              duration: 0.8,
              ease: 'power2.inOut',
              onComplete: () => {
                loading.classList.add('hidden');
                loading.style.display = 'none';
                resolve();
              }
            });
          }, 800);
        }
      });
    };

    checkReady();
  });
}
