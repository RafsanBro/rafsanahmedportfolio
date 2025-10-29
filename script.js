// script.js — minimal interactivity for the portfolio

// set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle && navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  if (navMenu) {
    navMenu.style.display = expanded ? 'none' : 'flex';
    navMenu.style.flexDirection = 'column';
    navMenu.style.gap = '8px';
    navMenu.style.padding = '1rem';
    navMenu.style.background = 'white';
    navMenu.style.position = 'absolute';
    navMenu.style.right = '12px';
    navMenu.style.top = '64px';
    navMenu.style.boxShadow = '0 8px 30px rgba(16,24,40,0.08)';
    navMenu.style.borderRadius = '12px';
    navMenu.style.border = '1px solid rgba(0,0,0,0.03)';
  }
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // if mobile nav open, close it
      if (navMenu && getComputedStyle(navMenu).display !== 'none' && window.innerWidth <= 980) {
        navMenu.style.display = 'none';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Simple contact handler (demo only)
function handleContact(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return false;
  }

  // For an actual site, you'd send this to a server or use form service.
  // For now, open user's email client as fallback:
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:you@domain.com?subject=${subject}&body=${body}`;
  return false;
}
