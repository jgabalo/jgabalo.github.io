// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      const sidebar = document.getElementById('sidebar');
      if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
      }
    }
  });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#sidebar .nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Animate skill progress bars on scroll
const animateProgressBars = () => {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  progressBars.forEach(bar => {
    const barPosition = bar.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;
    
    if (barPosition < screenPosition) {
      bar.style.width = bar.style.width;
    }
  });
};

window.addEventListener('scroll', animateProgressBars);
window.addEventListener('load', animateProgressBars);

// Scroll to top button
const createScrollToTopButton = () => {
  const button = document.createElement('div');
  button.className = 'scroll-to-top';
  button.innerHTML = '<i class="bi bi-arrow-up"></i>';
  document.body.appendChild(button);
  
  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      button.classList.add('visible');
    } else {
      button.classList.remove('visible');
    }
  });
};

// Initialize scroll to top button
createScrollToTopButton();

// Form submission handler
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
}

// Add animation class to elements on scroll
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe cards and timeline items
  document.querySelectorAll('.project-card, .timeline-content, .skill-category').forEach(el => {
    observer.observe(el);
  });
};

// Initialize animations
window.addEventListener('load', observeElements);

// Add loading class removal
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Dynamic year in footer
const updateFooterYear = () => {
  const footerText = document.querySelector('.footer p');
  if (footerText) {
    const currentYear = new Date().getFullYear();
    footerText.innerHTML = footerText.innerHTML.replace('2024', currentYear);
  }
};

updateFooterYear();

// Typing effect for home section (optional enhancement)
const createTypingEffect = (element, texts, speed = 100) => {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  const type = () => {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
    
    const typingSpeed = isDeleting ? speed / 2 : speed;
    setTimeout(type, typingSpeed);
  };
  
  type();
};

// Uncomment to enable typing effect
// const roleElement = document.querySelector('#home h2');
// if (roleElement) {
//   const roles = [
//     'Full Stack Developer',
//     'Creative Problem Solver',
//     'UI/UX Enthusiast',
//     'Open Source Contributor'
//   ];
//   createTypingEffect(roleElement, roles);
// }

console.log('Portfolio loaded successfully! ??');
