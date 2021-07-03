# Adding features to our bouncing balls demo

In this assessment, you are expected to use the bouncing balls demo from the previous article as a starting point, and add some new and interesting features to it.

## Starting point

To get this assessment started, make a local copy of [index-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/style.css), and [main-finished.js](https://github.com/mdn/learning-area/blob/master/javascript/oojs/bouncing-balls/main-finished.js) from our last article in a new directory in your local computer.

(I am just going to use my finished [index.html](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object_Building_Practice/index.html), [style.css](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object_Building_Practice/style.css), and [main.js](https://github.com/AndrewSRea/My_Learning_Port/blob/main/JavaScript/Intro_JS_Objects/Object_Building_Practice/main.js) files from my **Object_Building_Practice** folder.)

Alternatively, you could use a site like [JSBin]() or [Glitch]() to do your assessment. You could paste the HTML, CSS, and JavaScript into one of these online editors. If the online editor you are using doesn't have separate JavaScript/CSS panels, feel free to put them in inline `<script>`/`<style>` elements inside the HTML page.

## Hints and tips

A couple of pointers before you get started:

* This assessment is quite challenging. Read the whole assessment before you start coding, and take each step slowly and carefully.
* It might be a good idea to save a separate copy of the demo after you get each stage working, so you can refer back to it if you find yourself in trouble later on.

## Project brief

Our bouncy ball demo is fun, but now we want to make it a little bit more interactive by adding a user-controlled evil circle, which will eat the balls if it catches them. We also want to test your object-building skills by creating a generic `Shape()` object that our balls and evil circle can inherit from. Finally, we want to add a score counter to track the number of balls left to capture.

The following screenshot gives you an idea of what the finished program should look like:

![Image of bouncing balls inside a browser window](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Adding_bouncing_balls_features/bouncing-evil-circle.png)

To give you more of an idea, have a look at the [finished example](https://mdn.github.io/learning-area/javascript/oojs/assessment/). (No peeking at the source code!)

## Steps to complete 

The following sections describe what you need to do.

### Creating our new objects

First of all, change your existing `Ball()` constructor so that it becomes a `Shape()` constructor and add a new `Ball()` constructor:

1. The `Shape()` constructor should define the `x`, `y`, `velX`, and `velY` properties in the same way as the `Ball()` constructor did originally, but not the `color` and `size` properties.
2. It should also define a new property called `exists`, which is used to track whether the balls exist in the program (have not been eaten by the evil circle). This should be a Boolean (`true`/`false`).
3. The `Ball()` constructor should inherit the `x`, `y`, `velX`, `velY`, and `exists` properties from the `Shape()` constructor.
4. It should also define a `color` and `size` property, like the original `Ball()` constructor did.
5. Remember to set the `Ball()` constructor's `prototype` and `constructor` appropriately.
6. The `Ball` prototype's `collisionDetect()` method needs a small update. If the code were kept as-is, the `EvilCircle` would start eating the bouncing balls by setting the `exists` property to `false`. And that would reduce the number of balls involved in collision detection. A ball needs to be considered for collision detection only if the `exists` property is `true`. So, replace the existing `collisionDetect()` code with the following code:
```
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
```
As discussed above, the only addition is to check if the ball exists -- by using `balls[j].exists` in the `if` conditional.

The ball `draw()` method and `update()` method definitions should be able to stay exactly the same as they were before.

You also need to add a new parameter to the `new Ball() ( ... )` constructor call -- the `exists` parameter should be the 5th parameter, and should be given a value of `true`.

At this point, try reloading the code -- it should work just the same as it did before, with our redesigned objects.

### Defining `EvilCircle()`

Now it's time to meet the bad guy -- the `EvilCircle()`! Our game is only going to involve one evil circle, but we are still going to define it using a constructor that inherits from `Shape()` to give you some practice. You might want to add another circle to the app later on that can be controlled by another player, or have several computer-controlled evil circles. You're probably not going to take over the world with a single evil circle, but it will do for this assessment.

The `EvilCircle()` constructor should inherit `x`, `y`, `velX`, `velY`, and `exists` from `Shape()`, but `velX` and `velY` should always equal 20.

You should do something like `Shape.call(this, x, y, 20, 20, exists);`

It should also define its own properties, as follows:

* `color` -- `white`
* `size` -- `10`

Again, remember to define your inherited properties as parameters in the constructor, and set the `prototype` and `constructor` properties correctly.

### Defining `EvilCircle()`'s methods

`EvilCircle()` should have four methods, as described below.

#### `draw()`

This method has the same purpose as `Ball()`'s `draw()` method: It draws the object instance on the canvas. It will work in a very similar way, so you can start by copying the `Ball.prototype.draw` definition. You should then make the following changes:

* We want the evil circle to not be filled in, but rather have an outer line (stroke). You can achieve this by updating [`fillStyle`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle) and [`fill()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill) to [`strokeStyle`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle) and [`stroke()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle).
* We also want to make the stroke a bit thicker, so you can see the evil circle a bit more easily. This can be achieved by setting a value for [`lineWidth`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth) somewhere after the [`beginPath()`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath) call (3 will do).

#### `checkBounds()`

