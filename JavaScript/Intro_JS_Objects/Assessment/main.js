// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}

function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this, x, y, velX, velY, exists);

    this.color = color;
    this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);

Ball.prototype.constructor = Ball;

/*
    Well, this wasn't taught in the "Inheritance in JavaScript" article -- to define an Object's constructor as the line of code
    just above. It was outlined as the block of code just below.
*/

// Object.defineProperty(Ball.prototype, 'constructor', {
//     value: Ball,
//     enumerable: false,
//     writable: true
// });

Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        if (!(this === balls[j]) && balls[j].exists) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
            }
        }
    }
}

let balls = [];

while (balls.length < 25) {
    let size = random(10,20);
    let exists = true;
    let ball = new Ball(
        
        // ball position always drawn at least one ball width away from the edge of the canvas, to avoid drawing errors

        random(0 + size,width - size),
        random(0 + size,height - size),
        random(-7,7),
        random(-7,7),
        exists,
        'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
        size,
    );

    balls.push(ball);
}

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();

function EvilCircle(x, y, exists) {
    Shape.call(this, x, y, 20, 20, exists);

    this.color = 'white';
    this.size = 10;
}

/* 
    This was a tricky one that I just couldn't get to work, as I would take certain parameters out of the `EvilCircle` constructor
    and try to define them within the function, or I would take out certain definitions within the function but then the parameters
    would be unrecognized. And I knew that the `color` and `size` properties needed to be defined within the function but I thought
    they also needed to be parameters in the `EvilCircle` constructor. 
    To tell the truth, I don't completely understand how this block of code works.
    Does the `Shape.call()` call the original `Shape` constructor above as we set the `velX` and `velY` properties to 20?
    But then also, how does the `EvilCircle` constructor recognize the 'color' and 'size' parameters?
*/

// function EvilCircle(x, y, velX, velY, exists, color, size) {
//     Shape.call(this, x, y, 20, 20, exists);

//     this.velX = velX;
//     this.velY = velY;
//     this.color = 'white';
//     this.size = size;
// }

EvilCircle.prototype = Object.create(Shape.prototype);

EvilCircle.prototype.constructor = EvilCircle;

EvilCircle.prototype.draw = function() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
}

EvilCircle.prototype.checkBounds = function() {
    if ((this.x + this.size) >= width) {
        this.x = -(this.size);
    }

    if ((this.x - this.size) <= 0) {
        this.x = -(this.size);
    }

    if ((this.y + this.size) >= height) {
        this.y = -(this.size);
    }

    if ((this.y - this.size) <= 0) {
        this.y = -(this.size);
    }
}

EvilCircle.prototype.setControls = function() {
    let _this = this;
    window.onkeydown = function(e) {
        if (e.key === 'a') {
            _this.x -= _this.velX;
        } else if (e.key === 'd') {
            _this.x += _this.velX;
        } else if (e.key === 'w') {
            _this.y -= _this.velY;
        } else if (e.key === 's') {
            _this.y += _this.velY;
        }
    }
}

EvilCircle.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        if (balls[j].exists) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].exists = false;
            }
        }
    }
}