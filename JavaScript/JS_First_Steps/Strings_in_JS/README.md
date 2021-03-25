# Handling text -- strings in JavaScript

Next, we'll turn our attention to strings--this is what pieces of text are called in programming. In this article, we'll look at all the common things that you really ought to know about strings when learning JavaScript, such as creating strings, escaping quotes in strings, and joining strings together.

## The power of words

Words are very important to humans--they are a large part of how we communicate. Since the Web is a largely text-based medium designed to allow humans to communicate and share information, it is useful for us to have control over the words that appear on it. [HTML]() provides structure and meaning to our text, [CSS]() allows us to precisely style it, and JavaScript contains a number of features for manipulating strings, creating custom welcome messages and prompts, showing the right text labels when needed, sorting terms into the desired order, and much more.

Pretty much all of the programs we've shown you so far in the course have involved some string manipulation.

## Strings -- the basics

Strings are dealt with similarly to numbers at first glance but when you dig deeper, you'll start to see some notable differences. Let's start by entering some basic lines into the **browser developer console** to familiarize ourselves.

### Creating a string

1. To start with, enter the following lines:
```
let string = 'The revolution will not be televised.';
string;
```
Just like we did with numbers, we are deciding a variable, initializing it with a string value, and then returning the value. The only difference here is that when writing a string, you need to surround the value with quotes.

2. If you don't do this, or miss one of the quotes, you'll get an error. Try entering the following lines:
```
let badString1 = This is a test;
let badString2 = 'This is a test;
let badString3 = This is a test';
```
These lines don't work because any text without quotes around it is assumed to be a variable name, property name, a reserved word, or similar. If the browser can't find it, then an error is raised (e.g. "missing ; before statement"). If the browser can see where a string starts, but can't find the end of the string, as indicated by the 2nd quote, it complains with an error (with "unterminated string literal"). If your program is raising such errors, then go back and check all your strings to make sure you have no missing quote marks.

3. The following will work if you previously defined the variable `string`--try it now:
```
let badString = string;
badString;
```
`badString` is now set to have the same value as `string`.

### Single quotes vs. double quotes

1. In JavaScript, you can choose single quotes or double quotes to wrap your strings in. Both of the following will work okay:
```
let sgl = 'Single quotes.';
let dbl = "Double quotes";
sgl;
dbl;
```

2. There is very little difference between the two, and which you use is down to personal preference. You should choose one and stick to it, however; differently quoted code can be confusing, especially if you use two different quotes on the same string! The following will return an error:
```
let badQuotes = 'What on earth?";
```

3. The browser will think the string has not been closed because the other type of quote you are not using to contain your strings can appear in the string. For example, both of these are okay:
```
let sglDbl = 'Would you eat a "fish supper"?';
let dblSgl = "I'm feeling blue.";
sglDbl;
dblSgl;
```

4. However, you can't include the same quote mark inside the string if it's being used to contain them. The following will error, as it confuses the browser as to where the string ends:
```
let bigmouth = 'I've got no right to take my place...';
```
This leads us very nicely into our next subject.

### Escaping characters in a string

To fix our previous problem code line, we need to escape the problem quote mark. Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a backslash just before the character. Try this:
```
let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;
```
This works fine. You can escape other characters in the same way, e.g. `\"`, and there are some special codes besides. See [Escape notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_notation) for more details.

## Concatenating strings

1. Concatenate is a fancy programming word that means "join together". Joining together strings in JavaScript uses the plus (+) operator, the same one we use to add numbers together, but in this context it does something different. Let's try an example in our console.
```
let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
joined;
```
The result of this is a variable called `joined`, which contains the value "Hello, how are you?".

2. In the last instance, we joined only two strings, but you can join as many as you like, as long as you include a `+` between each pair. Try this:
```
let multiple = one + one + one + one + two;
multiple;
```

3. You can also use a mix of variables and actual strings. Try this:
```
let response = one + 'I am fine - ' + two;
response;
```

<hr>

**Note**: When you enter an actual string in your code, enclosed in sigle or double quotes, it is called a **string literal**.

<hr>

### Concatenation in context

