/**
 * NovaByte Lab - Official Interactive Script
 * Modern vanilla JS without external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const header = document.querySelector('.site-header');

  if (mobileToggle && header) {
    mobileToggle.addEventListener('click', () => {
      header.classList.toggle('mobile-menu-active');
      const isExpanded = header.classList.contains('mobile-menu-active');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('mobile-menu-active');
      });
    });
  }

  // 2. Email One-Tap Copy with Visual Feedback
  const emailBadge = document.querySelector('.email-copy-badge');
  if (emailBadge) {
    emailBadge.addEventListener('click', async () => {
      const email = emailBadge.getAttribute('data-email') || 'ranu02769@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const hint = emailBadge.querySelector('.copy-hint');
        if (hint) {
          const originalText = hint.innerText;
          hint.innerText = 'Copied to clipboard! ✓';
          hint.style.color = '#10b981';
          setTimeout(() => {
            hint.innerText = originalText;
            hint.style.color = '';
          }, 2500);
        }
      } catch (err) {
        // Fallback for older browsers
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // 3. Auto-update copyright year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.innerText = new Date().getFullYear();
  }

  // 4. Subtle Card Hover Glow Effect
  const cards = document.querySelectorAll('.app-card, .pillar-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});

