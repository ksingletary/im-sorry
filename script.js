// Floating hearts background
const hearts = document.getElementById('hearts');
const count = window.innerWidth < 600 ? 12 : 20;
for (let i = 0; i < count; i++) {
  const s = document.createElement('span');
  s.textContent = '♥';
  s.style.left = Math.random() * 100 + 'vw';
  s.style.fontSize = 12 + Math.random() * 22 + 'px';
  s.style.animationDuration = 8 + Math.random() * 10 + 's';
  s.style.animationDelay = -Math.random() * 18 + 's';
  hearts.appendChild(s);
}

// The "No" button that won't sit still
const no = document.getElementById('no');
const yes = document.getElementById('yes');
const hint = document.getElementById('hint');
const lines = ['Are you sure?', 'Please? 🥺', 'Pretty please?', "I'll send Dunkin", 'The button is shy', 'Try the other one'];
let n = 0;
let scale = 1;

function dodge(e) {
  if (e) e.preventDefault();
  const rect = no.getBoundingClientRect();
  const pad = 16;
  const maxX = window.innerWidth - rect.width - pad;
  const maxY = window.innerHeight - rect.height - pad;
  no.classList.add('loose');
  no.style.left = Math.max(pad, Math.random() * maxX) + 'px';
  no.style.top = Math.max(pad, Math.random() * maxY) + 'px';
  hint.textContent = lines[n++ % lines.length];
  scale = Math.min(scale + 0.12, 1.7);
  yes.style.transform = 'scale(' + scale + ')';
}

// Desktop: run away on hover. Phone: run away on tap.
no.addEventListener('mouseenter', () => dodge());
no.addEventListener('pointerdown', dodge);
no.addEventListener('click', dodge);

yes.addEventListener('click', () => {
  document.getElementById('sorry').hidden = true;
  document.getElementById('forgiven').hidden = false;
  no.hidden = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
