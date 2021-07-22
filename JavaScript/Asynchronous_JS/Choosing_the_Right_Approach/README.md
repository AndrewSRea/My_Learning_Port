# Choosing the right approach

To finish this module off, we'll provide a brief discussion of the different coding techniques and features we've discussed throughout, looking at which one you should use when, with recommendations and reminders of common pitfalls where appropriate. We'll probably add to this resource as time goes on.

## Asynchronous callbacks

Generally found in old-style APIs, asynchronous callbacks involve a function being passed into another function as a parameter, which is then invoked when an asynchronous operation has been completed, so that the callback can in turn do something with the result. This is the precursor to promises; it's not as efficient or flexible. Use only when necessary.

**Useful for...**

| Single delayed operation | Repeating operation | Multiple sequential operations | Multiple simultaneous operations |
| --- | --- | --- | --- |
| No | Yes (recursive callbacks) | Yes (nested callbacks) | No |

### Code example

