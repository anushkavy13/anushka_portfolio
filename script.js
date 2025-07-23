// Scroll Reveal Animation
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1,
});

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? "☀ Light Mode" : "🌙 Dark Mode";
});
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    tag.classList.toggle('active');
  });
});
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
fadeEls.forEach(el => observer.observe(el));
document.getElementById('infoBtn').addEventListener('click', () => {
  document.getElementById('infoTip').classList.toggle('show');
});
let downloadCount = 0;

document.querySelector('.resume-btn').addEventListener('click', () => {
  downloadCount++;
  console.log(`Resume downloaded ${downloadCount} times`);
});
