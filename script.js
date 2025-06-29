function updateCountdown() {
  const launchDate = new Date("september 5,2025 09:54:00").getTime() ; // 1 min from now (for testing)
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

 if (timeLeft < 0) {
  document.querySelector(".countdown").innerHTML = "<h2>Prerna is Live Now!</h2>";
  launchFireworks();
}


    
}
 setInterval(updateCountdown, 1000);
updateCountdown();

// File: script.js
// This is a JavaScript file for a countdown timer and fireworks animation.

// === FIREWORKS ANIMATION ===

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function randomColor() {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r},${g},${b})`;
}

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const color = randomColor();

  for (let i = 0; i < 1000; i++) {
    particles.push({
      x, y,
      speed: Math.random() * 4 + Math.random() * 2,
      angle: Math.random() * 2 * Math.PI,
      radius: Math.random() * 2 + 1,
      color,
      life: 100
    });
  }
}

function updateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += Math.cos(p.angle) * p.speed;
    p.y += Math.sin(p.angle) * p.speed;
    p.life--;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
    ctx.fillStyle = p.color;
    ctx.fill();
    if (p.life <= 0) particles.splice(i, 1);
  });
}

function animateFireworks() {
  updateFireworks();
  if (particles.length > 0) {
    requestAnimationFrame(animateFireworks);
  }
}

function launchFireworks() {
  canvas.style.display = "block";
  let count = 0;
  const interval = setInterval(() => {
    createFirework();
    animateFireworks();
    count++;
    if (count > 10) clearInterval(interval);
  }, 300);
}
setTimeout(() => {
  window.location.href = "home.html";
}, 10000);

// === END OF FIREWORKS ANIMATION ===