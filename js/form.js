/* =============================================================
   FORM.JS — Contact Form Validation + Submit (Formspree)
   Client-side validation: all required fields, email format.
   ============================================================= */

(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  var successMessage = document.getElementById('form-success');

  if (!form) return;

  /* ── Validators ───────────────────────────────────────────── */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function isValidPhone(phone) {
    if (!phone || phone.trim() === '') return true; // Optional field
    return /^[\d\s\+\-\(\)]{7,20}$/.test(phone.trim());
  }

  /* ── Field Error Display ──────────────────────────────────── */
  function showError(field, errorId, message) {
    field.classList.add('has-error');
    field.setAttribute('aria-invalid', 'true');
    var errorEl = document.getElementById(errorId);
    if (errorEl) {
      errorEl.textContent = '⚠ ' + message;
    }
  }

  function clearError(field, errorId) {
    field.classList.remove('has-error');
    field.setAttribute('aria-invalid', 'false');
    var errorEl = document.getElementById(errorId);
    if (errorEl) {
      errorEl.textContent = '';
    }
  }

  /* ── Validate Single Field ────────────────────────────────── */
  function validateField(field) {
    var name = field.name;
    var value = field.value.trim();
    var errorId = name + '-error';
    var valid = true;

    clearError(field, errorId);

    if (field.required && value === '') {
      showError(field, errorId, 'This field is required.');
      valid = false;
    } else if (name === 'email' && value !== '' && !isValidEmail(value)) {
      showError(field, errorId, 'Please enter a valid email address.');
      valid = false;
    } else if (name === 'phone' && !isValidPhone(value)) {
      showError(field, errorId, 'Please enter a valid phone number.');
      valid = false;
    } else if (name === 'service' && value === '') {
      showError(field, errorId, 'Please select a service.');
      valid = false;
    }

    return valid;
  }

  /* ── Validate All Fields ──────────────────────────────────── */
  function validateForm() {
    var fields = form.querySelectorAll('input[required], select[required], textarea[required], input[name="phone"]');
    var allValid = true;
    var firstInvalid = null;

    fields.forEach(function (field) {
      var valid = validateField(field);
      if (!valid && !firstInvalid) {
        firstInvalid = field;
      }
      allValid = allValid && valid;
    });

    if (firstInvalid) {
      firstInvalid.focus();
    }

    return allValid;
  }

  /* ── Submit Handler ───────────────────────────────────────── */
  function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    var submitBtn = form.querySelector('[type="submit"]');
    var originalText = submitBtn.innerHTML;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner"></span> Sending…';

    var formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(function (response) {
      if (response.ok) {
        form.style.display = 'none';
        if (successMessage) {
          successMessage.classList.add('visible');
        }
      } else {
        response.json().then(function (data) {
          var errorMessage = (data.errors && data.errors.length > 0)
            ? data.errors.map(function (e) { return e.message; }).join(', ')
            : 'There was an error submitting the form. Please try again.';
          var globalError = document.getElementById('form-global-error');
          if (globalError) {
            globalError.textContent = errorMessage;
            globalError.style.display = 'block';
          }
        });
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    })
    .catch(function () {
      var globalError = document.getElementById('form-global-error');
      if (globalError) {
        globalError.textContent = 'Network error. Please check your connection and try again.';
        globalError.style.display = 'block';
      }
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    });
  }

  /* ── Real-time Validation on Blur ─────────────────────────── */
  function initRealTimeValidation() {
    var fields = form.querySelectorAll('input, select, textarea');
    fields.forEach(function (field) {
      field.addEventListener('blur', function () {
        validateField(field);
      });
      field.addEventListener('input', function () {
        if (field.classList.contains('has-error')) {
          validateField(field);
        }
      });
    });
  }

  /* ── Init ─────────────────────────────────────────────────── */
  form.addEventListener('submit', handleSubmit);
  initRealTimeValidation();
}());
