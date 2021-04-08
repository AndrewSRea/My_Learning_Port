# Looping code

Programming languages are very useful for rapidly completing repetitive tasks, from multiple basic calculations to just about any other situation where you've got a lot of similar items of work to complete. Here we'll look at the loop structures available in JavaScript that handle such needs.

## Keep me in the loop

Loops, loops, loops. As well as being associated with [popular breakfast cereals](https://en.wikipedia.org/wiki/Froot_Loops), [roller coasters](https://en.wikipedia.org/wiki/Vertical_loop), and [musical production](https://en.wikipedia.org/wiki/Loop_(music)), they are also a critical concept in programming. Programming loops are all to do with doing the same thing over and over again, which is termed **iteration** in programming speak.

Let's consider the case of a farmer who is making sure he has enough food to feed his family for the week. He might use the following loop to achieve this:

![Image of a pseudocode loop](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code/loop_js-02-farm.png)

A loop usually has one or more of the following features:

* A **counter**, which is initialized with a certain value--this is the starting point of the loop ("Start: I have no food", above).
* A **condition**, which is a true/false test to determine whether the loop continues to run, or stops--usually when the counter reaches a certain value. This is illustrated by "Have I got enough food?" above. Let's say he needs 10 portions of food to feed his family.
* An **iterator**, which generally increments the counter by a small amount on each successive loop until the condition is no longer `true`. We haven't explicitly illustrated this above, but we could think about the farmer being able to collect, say 2 portions of food per hour. After each hour, the amount of food he has collected is incremented by two, and he checks whether he has enough food. If he has reached 10 portions (the point where the condition is no longer true, so the loop exits), he can stop collecting and go home.

In [pseudocode](https://developer.mozilla.org/en-US/docs/Glossary/Pseudocode), this would look something like the following:
```
loop (food = 0; foodNeeded = 10) {
    if (food >= foodNeeded) {
        exit loop;
        // We have enough food; let's go home
    } else {
        food += 2;   // Spend an hour collecting 2 more food
        // loop will then run again
    }
}
```
So the amount of food needed is set at 10, and the amount the farmer currently has is set at 0. In each iteration of the loop, we check whether the amount of food the farmer has is larger or equal to the amount he needs. If so, we can exit the loop. If not, the farmer spends an hour collecting two portions of food and the loop runs again.

### Why bother?

At this point, you probably understand the high-level concepts behind loops, but you are probably thinking "OK, great, but how does this help me write better JavaScript code?" As we said earlier, **loops are all to do with doing the same thing over and over again**, which is great for **rapidly completing repetitive tasks**.

Often, the code will be slightly different on each successive iteration of the loop, which means that you can complete a whole load of tasks that are similar but slightly different; if you've got a lot of different calculations to do, you want to do each different one, not the same one over and over again!

Let's look at an example to perfectly illustrate why loops are such a good thing. Let's say we wanted to draw 100 random circles on a [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas) element.