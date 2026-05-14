document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Scroll Fade-in Animation
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // Carousel Logic
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const dots = Array.from(document.querySelectorAll('.carousel-indicator'));

  if (track && slides.length > 0) {
    let currentSlideIndex = 0;

    const updateCarousel = (index) => {
      track.style.transform = 'translateX(-' + index * 100 + '%)';
      
      dots.forEach(dot => dot.classList.remove('current-indicator'));
      dots[index].classList.add('current-indicator');
      
      slides.forEach(slide => slide.classList.remove('current-slide'));
      slides[index].classList.add('current-slide');
      
      currentSlideIndex = index;
    };

    nextBtn.addEventListener('click', () => {
      let newIndex = currentSlideIndex + 1;
      if (newIndex >= slides.length) newIndex = 0;
      updateCarousel(newIndex);
    });

    prevBtn.addEventListener('click', () => {
      let newIndex = currentSlideIndex - 1;
      if (newIndex < 0) newIndex = slides.length - 1;
      updateCarousel(newIndex);
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        updateCarousel(index);
      });
    });
  }
});

// Global UI Enhancements (Scroll to Top)
document.addEventListener('DOMContentLoaded', () => {
  // Create and Append Scroll to Top Button
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.id = 'scrollTopBtn';
  scrollTopBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>';
  scrollTopBtn.setAttribute('aria-label', '맨 위로 가기');
  scrollTopBtn.style.display = 'flex';
  scrollTopBtn.style.justifyContent = 'center';
  scrollTopBtn.style.alignItems = 'center';
  document.body.appendChild(scrollTopBtn);

  // Toggle button visibility based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  // Smooth scroll to top when clicked
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
