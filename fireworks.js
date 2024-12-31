const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

// Resize canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Firework Settings
const fireworks = [];
const gravity = 0.1;

// Utility Functions
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Firework Class
class Firework {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.vx = random(-2, 2);
    this.vy = random(-5, -2);
    this.alpha = 1;
  }

  update() {
    this.vy += gravity;
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 0.02;
  }

  draw() {
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Firework Explosion
function explode(x, y) {
  const colors = ['#ff0040', '#00ff40', '#0040ff', '#ffff00', '#ff00ff', '#00ffff'];
  for (let i = 0; i < 50; i++) {
    fireworks.push(new Firework(x, y, colors[Math.floor(random(0, colors.length))]));
  }
}

// Animation Loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((firework, i) => {
    firework.update();
    firework.draw();
    if (firework.alpha <= 0) {
      fireworks.splice(i, 1);
    }
  });
  requestAnimationFrame(animate);
}

// Launch Fireworks
setInterval(() => {
  explode(random(0, canvas.width), random(0, canvas.height));
}, 500);

animate();
