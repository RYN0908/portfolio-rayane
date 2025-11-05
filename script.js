(() => {
  const elements = Array.from(document.querySelectorAll('.fade-in'));

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

  elements.forEach((el) => observer.observe(el));
})();


