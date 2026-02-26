export const initSlider = () => {
  const section = document.querySelector('.features');

  if (!section) {
    return;
  }

  const track = section.querySelector('.features__track');
  const slides = section.querySelectorAll('.features__slide');
  const btnPrev = section.querySelector('.icon--prev');
  const btnNext = section.querySelector('.icon--next');
  const currentEl = section.querySelector('.pagination__active');
  const totalEl = section.querySelector('.pagination__total');

  if (slides.length === 0) {
    return;
  }

  if (totalEl) {
    totalEl.textContent = String(slides.length).padStart(2, '0');
  }

  const scrollToSlide = (direction) => {
    track.scrollBy({
      left: track.clientWidth * direction,
      behavior: 'smooth',
    });
  };

  btnNext?.addEventListener('click', () => scrollToSlide(1));
  btnPrev?.addEventListener('click', () => scrollToSlide(-1));

  track.addEventListener(
    'scroll',
    () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);

      if (currentEl) {
        currentEl.textContent = String(index + 1).padStart(2, '0');
      }
    },
    { passive: true },
  );
};
