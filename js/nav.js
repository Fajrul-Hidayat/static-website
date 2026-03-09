/* =============================================================
   NAV.JS — Navbar Scroll Behavior + Hamburger Menu
   No console.log() in production code.
   ============================================================= */

(function () {
  'use strict';

  var navbar = document.getElementById('navbar');
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileMenuLinks = document.querySelectorAll('.mobile-menu__link');
  var isOpaquePage = navbar && navbar.dataset.opaque === 'true';

  /* ── Scroll Behavior ──────────────────────────────────────── */
  function handleScroll() {
    if (!navbar) return;
    if (isOpaquePage) {
      navbar.classList.add('opaque');
      return;
    }
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /* ── Hamburger Toggle ─────────────────────────────────────── */
  function openMenu() {
    if (!hamburger || !mobileMenu) return;
    mobileMenu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!hamburger || !mobileMenu) return;
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    var isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  /* ── Active Nav Link ──────────────────────────────────────── */
  function setActiveLink() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.navbar__link[data-page]');
    navLinks.forEach(function (link) {
      if (link.dataset.page === path) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* ── Keyboard Escape Closes Menu ─────────────────────────── */
  function handleKeydown(e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
      closeMenu();
      if (hamburger) hamburger.focus();
    }
  }

  /* ── Init ─────────────────────────────────────────────────── */
  function init() {
    if (!navbar) return;

    // Set initial state
    handleScroll();
    if (isOpaquePage) {
      navbar.classList.add('opaque');
    }

    // Scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Hamburger
    if (hamburger) {
      hamburger.addEventListener('click', toggleMenu);
    }

    // Close menu on link click
    mobileMenuLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Keyboard
    document.addEventListener('keydown', handleKeydown);

    // Active link
    setActiveLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
