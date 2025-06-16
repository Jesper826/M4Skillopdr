const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section--visible');
    }
  });
}, { threshold: 0.2 });
 
sections.forEach(section => {
  observer.observe(section);
});

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const bg = document.querySelector('.forground');
  if (bg) {
    bg.style.transform = `translateY(${scrolled * 0.4}px)`;
  }
});

setTimeout(() => {
  const bg = document.querySelector('.background');
  // if (bg) {
  //   bg.classList.add('background--fade');
  // }
}, 5000);

document.querySelectorAll('.section').forEach(section => {
  section.addEventListener('mouseenter', () => {
    section.classList.add('section--rotating');
    setTimeout(() => {
      section.classList.remove('section--rotating');
    }, 3000);
  });
});

document.querySelectorAll('.languages-scroll').forEach(el => {
  el.addEventListener('wheel', (evt) => {
    if (evt.deltaY !== 0) {
      evt.preventDefault();
      el.scrollLeft += evt.deltaY;
    }
  });
});


