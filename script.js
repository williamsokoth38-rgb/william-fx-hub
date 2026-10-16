const modal = document.getElementById('signupModal');
const openBtn = document.getElementById('openSignup');
const closeBtn = document.getElementById('closeSignup');
const canvas = document.getElementById('plasma-canvas');
const ctx = canvas.getContext('2d');

// Plasma fluid over your TRADER background
function resize(){ canvas.width = innerWidth; canvas.height = innerHeight }
resize(); window.addEventListener('resize', resize);
let t = 0;
function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 t+=0.003;
 // soft white blobs moving over your wave
 for(let i=0;i<3;i++){
  let x = (0.3 + i*0.2 + Math.sin(t+i)*0.05) * canvas.width;
  let y = (0.5 + Math.cos(t*0.7+i)*0.08) * canvas.height;
  let r = canvas.width*0.22;
  let g = ctx.createRadialGradient(x,y,0,x,y,r);
  g.addColorStop(0,'rgba(255,255,255,0.18)');
  g.addColorStop(1,'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();
 }
 requestAnimationFrame(draw);
}
draw();

// Open / close signup
openBtn.onclick = () => modal.classList.add('active');
closeBtn.onclick = () => modal.classList.remove('active');
modal.onclick = (e) => { if(e.target === modal) modal.classList.remove('active') }

// Submit
document.getElementById('signupForm').onsubmit = (e)=>{
 e.preventDefault();
 alert('Welcome to William FX! Account created.');
 modal.classList.remove('active');
}