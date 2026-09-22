const sections = document.querySelectorAll('main > section[id]');
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) if (entry.isIntersecting) {
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
      const active = link.getAttribute('href') === `#${entry.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
}, {rootMargin: '-15% 0px -55% 0px'});
sections.forEach(section => observer.observe(section));
