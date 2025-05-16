// Navbar background toggle on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

document.querySelectorAll('.nav-links a[data-target]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);

      // Close other panels
      document.querySelectorAll('.slide-panel').forEach(panel => {
        if (panel !== targetPanel) panel.classList.remove('active');
      });

      // Toggle clicked panel
      targetPanel.classList.toggle('active');
    });
  });

  // Click outside to close
  document.addEventListener('click', function (e) {
    const clickedPanel = e.target.closest('.slide-panel');
    const clickedNav = e.target.closest('[data-target]');
    if (!clickedPanel && !clickedNav) {
      document.querySelectorAll('.slide-panel').forEach(panel => panel.classList.remove('active'));
    }
  });

  function closePanels() {
  document.querySelectorAll('.slide-panel').forEach(panel => panel.classList.remove('active'));
}


// Intersection Observer config for animations
const observerOptions = {
  threshold: 0.7,
};

// Animation handler for observed elements
const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Animate once
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);

// Select and observe elements with animation classes
document.querySelectorAll('.slide-up, .fade-in').forEach(el => {
  observer.observe(el);
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    document.querySelectorAll('h2').forEach(h2 => {
      h2.style.transform = `translateY(${Math.sin(scrollY * 0.05) * 30}px)`;
    });
  });

  window.addEventListener('scroll', function () {
    const cta = document.querySelector('.cta-section');
    const scrollY = window.scrollY;
    // Invert the scroll speed
    cta.style.backgroundPositionY = `${-scrollY * 0.3}px`;
  });