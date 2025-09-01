function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Fade-in for sections on scroll
function fadeInOnScroll() {
  document.querySelectorAll('.glass').forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100) el.classList.add('fade-in');
  });
}
window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('DOMContentLoaded', fadeInOnScroll);

// Mock Sensor Data Generator & UI Update
function randomBetween(min, max){ return Math.floor(Math.random()*(max-min+1))+min;}
function updateSensors(){
  const gas = randomBetween(120, 380); // ppm
  const water = randomBetween(15, 90); // percent
  const vib = randomBetween(0, 100);   // arbitrary unit

  document.getElementById('gas-val').textContent = gas;
  document.getElementById('gas-bar').style.width = (gas/4) + '%';
  document.getElementById('gas-bar').style.background = gas>300 ? 'linear-gradient(90deg, #ff4e4e 60%, #ffdab7)' : 'linear-gradient(90deg,#29c7ac,#00b7ff)';
  document.getElementById('water-val').textContent = water;
  document.getElementById('water-bar').style.width = water + '%';
  document.getElementById('vib-val').textContent = vib;
  document.getElementById('vib-bar').style.width = vib + '%';
  document.getElementById('vib-bar').style.background = vib>70 ? 'linear-gradient(90deg,#e862f8 60%,#fa8c07)' : 'linear-gradient(90deg,#d117ff,#fa8c07)';
}
updateSensors(); // initial
setInterval(updateSensors, 3400);
