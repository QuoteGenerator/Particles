
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleAmount = 1000;
const particleHolder = [];

window.addEventListener("resize",function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width-canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 3;
        this.speedX = 8
        this.speedY = Math.random() * 6-3;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(){
        ctx.fillStyle = "red";
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "blue";
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
    }
}

function createParticle(){
    for(let i = 0; i < particleAmount; i++){
        particleHolder.push(new Particle());
    }
}
createParticle();

function particleControl(){
    for(let i = 0; i < particleHolder.length; i++){
        particleHolder[i].update();
        particleHolder[i].draw();
    }
}

function teleportBack(){
    for(let i = 0; i < particleHolder.length; i++){
        if(particleHolder[i].x >= canvas.width || particleHolder[i].y >= canvas.height || particleHolder[i].y <= 0){
            particleHolder[i].x = Math.random() * canvas.width-1300;
            particleHolder[i].y = Math.random() * canvas.height;
        }
    }
}

console.log(particleHolder)
function animate(){
    ctx.clearRect(0,0, canvas.width,canvas.height)
    particleControl();
    teleportBack();
    requestAnimationFrame(animate);
}
animate();