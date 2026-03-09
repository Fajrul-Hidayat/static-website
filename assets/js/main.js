/**
 * BrightPath Solutions — Main JavaScript
 * Agent 3: Frontend Developer
 */

'use strict';

/* ─── Mobile Navigation ─────────────────────── */
const hamburger = document.getElementById('hamburger');
const navDrawer = document.getElementById('nav-drawer');

if (hamburger && navDrawer) {
  hamburger.addEventListener('click', () => {
    const isOpen = navDrawer.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navDrawer.contains(e.target)) {
      navDrawer.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  // Close on nav link click
  navDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navDrawer.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navDrawer.classList.contains('is-open')) {
      navDrawer.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      hamburger.focus();
    }
  });
}

/* ─── Contact Form ──────────────────────────── */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        contactForm.style.display = 'none';
        if (formSuccess) {
          formSuccess.style.display = 'block';
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      alert('Something went wrong. Please email us directly at hello@brightpathsolutions.com');
    }
  });
}

/* ─── Scroll-based Header Shadow ───────────── */
const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 4px 16px rgba(0,0,0,0.10)'
      : '0 1px 3px rgba(0,0,0,0.08)';
  }, { passive: true });
}

/* ─── Animate on Scroll (IntersectionObserver) */
const animateElements = document.querySelectorAll('.animate-on-scroll');
if (animateElements.length > 0 && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  animateElements.forEach(el => observer.observe(el));
}

/* ─── Active nav link highlighter ──────────── */
(function setActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link[data-page]').forEach(link => {
    if (link.dataset.page === currentPath) {
      link.classList.add('nav__link--active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();
