/* =============================================================
   ACCORDION.JS — FAQ Accordion Expand/Collapse
   Accessible: aria-expanded, aria-controls, keyboard support.
   ============================================================= */

(function () {
  'use strict';

  function initAccordion(container) {
    var triggers = container.querySelectorAll('.accordion-trigger');

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        var bodyId = trigger.getAttribute('aria-controls');
        var body = document.getElementById(bodyId);

        if (!body) return;

        if (isExpanded) {
          // Close
          trigger.setAttribute('aria-expanded', 'false');
          body.classList.remove('open');
        } else {
          // Close all other open items first
          triggers.forEach(function (otherTrigger) {
            var otherId = otherTrigger.getAttribute('aria-controls');
            var otherBody = document.getElementById(otherId);
            otherTrigger.setAttribute('aria-expanded', 'false');
            if (otherBody) {
              otherBody.classList.remove('open');
            }
          });

          // Open this one
          trigger.setAttribute('aria-expanded', 'true');
          body.classList.add('open');
        }
      });

      // Keyboard support: Enter and Space
      trigger.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          trigger.click();
        }
      });
    });
  }

  function init() {
    var accordions = document.querySelectorAll('.accordion');
    accordions.forEach(initAccordion);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
