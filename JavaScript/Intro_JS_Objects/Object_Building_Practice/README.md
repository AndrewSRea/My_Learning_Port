# Object Building Practice

In previous articles, we looked at all the essential JavaScript object theory and syntax details, giving you a solid base to start from. In this article, we dive into a practical exercise, giving you some more practice in building custom JavaScript objects, with a fun and colorful result.

## Let's bounce some balls

In this article, we will write a classic "bouncing balls" demo, to show you how useful objects can be in JavaScript. Our little balls will bounce around on the screen, and change color when they touch each other. The finished example will look a little something like this:

![Image of bouncing balls inside a browser window](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice/bouncing-balls.png)

This example will make use of the [Canvas API](https://github.com/AndrewSRea/My_Learning_Port/tree/main/JavaScript/Client-side_Web_APIs/Drawing_Graphics#drawing-graphics) for drawing the balls to the screen, and the [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) API for animating the whole display -- you don't need to have any previous knowledge of these APIs, and we hope that by the time you've finished this article you'll be interested in exploring them more. Along the way, we'll make use of some nifty objects, and show you a couple of nice techniques like bouncing balls off walls, and checking whether they have hit each other (otherwise known as **collision detection**).