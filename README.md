# Javascript ES6 note

## I. let and const

- let:
  - can use in block scope
  - cannot be redeclared in the same scope
  - must be declared before use

**Example:**

```javascript
    let x = 2;//allowed
    let x = 3;//not allowed
    // x = 2
    {
        let x = 3; //allowed
        let x = 4; //not allowed
        //x = 3
    }
    // x = 2
```

```javascript
    x = 2;
    var x = 3;
    //Using a let variable before it is declared will result in a ReferenceError
```

- const:
  - can use in block scope
  - cannot be redeclared in the same scope
  - must be declared and assigned before use
  - cannot be reassigned
  - can change a const array or object

**Example:**

```javascript
    const x = 3.2; //allowed
    const x = 3; //not allowed
    x = 4; // not allowed - can't change
    const x;//not allowed - must be assigned
    const a = [2,3,5];
    a[2] += 1; // allowed
    const obj = {
        name:"son"
    };
    obj.name = "son hoang"; // allowed

    y = 2;
    const y = 3; //not allowed - referenceError

```

## II. Data types

**Example:**

```javascript
    let x = "son";
    let y = 4;
    let z = x + y; 
    //=> result: z = "son4"

    let m = y + x;
    //=> result: m = "4son"

    let n = x + y + 6;
    //=> result: n = "son46"

    let o = 4 + 6 + x;
    //=> result: o = "10son" 
```

## III. Common HTML events

Event | Description
------|-------------
onchange|An HTML element has been changed
onclick|The user clicks an HTML element
onmouseover|The user moves the mouse over an HTML element
onmouseout|The user moves the mouse away from an HTML element
onkeydown|The user pushes a keyboard key
onload|The browser has finished loading the page

## IV. Escape character

Using backslash `\`. before other character

**Example:**

```javascript
    const x = "He is a \"Viking\" !";
    // result: He is a "Viking"!
```

- Other escape sequence are valid in javascript:

Code | Result
-----|-------
\b|Backspace
\f|Form Feed
\n|New line
\r|Carriage return
\t|Horizontal tabulator
\v|Vertical tabulator

## V. String methods

### 1. string.length

Return length of a string

**Example:**

```javascript
    let x = "son";
    console.log(x.length);
    // result: 3
```

### 2. Extracting String parts

There are 3 methods for extracting a part of a string:

- `string.slice(start, end)`
- `string.substring(start, end)`
- `string.substr(start, length)`

#### The .slice() method

`slice()` extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: the start position, and the end position (end not included).

This example slices out a portion of a string from position 7 to position 12 (13-1):

```javascript
    let str = "Apple, Banana, Kiwi";
    str.slice(7, 13)     // Returns Banana
```

If a parameter is negative, the position is counted from the end of the string.

This example slices out a portion of a string from position -12 to position -6:

```javascript
    let str = "Apple, Banana, Kiwi";
    str.slice(-12, -6)    // Returns Banana
```

If you omit the second parameter, the method will slice out the rest of the string or, counting from the end:

```javascript
    str.slice(7);    // Returns Banana,Kiwi
    str.slice(-12)    // Returns Banana,Kiwi
```

#### The .substring() Method

- substring() is similar to slice().

- The difference is that substring() cannot accept negative indexes.

#### The .substr() Method

- substr() is similar to slice().
- The difference is that the second parameter specifies the length of the extracted part.

**Example:**

```javascript
    let str = "Apple, Banana, Kiwi";
    str.substr(7, 6)    // Returns Banana
```

==> If the parameter is nagative, the position counts from the end. If the second parameter is missing, it will slice out the rest of the string.

### 3. Replace string content

`string.replace(beReplaced, placedIn)`

- The replace() method replaces a specified value with another value in a string.

- The replace() method does not change the string it is called on. It returns a new string.

- By default, the replace() method replaces only the first match.

- By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work.

- To replace case insensitive, use a regular expression with an /i flag (insensitive):

**Example:**

```javascript
    let text = "Please visit Microsoft!";
    let newText = text.replace("Microsoft","W3Schools");
    // Result: Please vist W3Schools

    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace("Microsoft", "W3Schools");
    // Result: Please vist W3Schools and Microsoft

    let text = "Please visit Microsoft!";
    let newText = text.replace(/MICROSOFT/i, "W3Schools");
```

- To replace all matches, use a regular expression with a /g flag (global match):

```javascript
    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace(/Microsoft/g, "W3Schools");
    //Result: Please visit W3Schools and W3School
```

### 4. Converting to upper and lower case

- use `string.toUpperCase()` and `string.toLowerCase()`

### 5. The concat() method

```javascript
    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);
```

The concat() method can be used instead of the plus operator. These two lines do the same:

```javascript
    text = "Hello" + " " + "World!";
    text = "Hello".concat(" ", "World!");
```

**All string methods return a new string. They don't modify the original string.
Formally said: Strings are immutable: Strings cannot be changed, only replaced.**

### 6. String.trim()

The trim() method removes whitespace from both sides of a string:

```javascript
    let text = "       Hello World!        ";
    text.trim()    // Returns "Hello World!"
```

### 7. Extracting string character

There are 3 methods for extracting string characters:

- `charAt(position)`
- `charCodeAt(position)`
- `Property access []`

The `charAt()` method returns the character at a specified index (position) in a string:

**Example:**

```javascript
    let text = "HELLO WORLD";
    text.charAt(0)           // Returns H
```

The `charCodeAt()` method returns the unicode of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).

```javascript
    let text = "HELLO WORLD";
    text.charCodeAt(0)       // Returns 72
```

### 8. Converting a String to an Array

A string can be converted to an array with the `split()` method:

**Example:**

```javascript
    let x = "My name is son";
    x.split(" ")
    //Return ["My", "name", "is", "son"]

    x.split("")
    //Return ["M","y"," ","n","a","m"....]
```

## VI. String Search

JavaScript methods for searching strings:

- `String.indexOf()`
- `String.lastIndexOf()`
- `String.startsWith()`
- `String.endsWith()`

### 1. String.indexOf()

The `indexOf()` method returns the index of (the position of) the first occurrence of a specified text in a string:

```javascript
    let str = "Please locate where 'locate' occurs!";
    str.indexOf("locate")    // Returns 7
```

### 2. String.lastIndexOf()

The `lastIndexOf()` method returns the index of the last occurrence of a specified text in a string:

```javascript
    let str = "Please locate where 'locate' occurs!";
    str.lastIndexOf("locate")    // Returns 21
```

Both `indexOf()`, and `lastIndexOf()` return -1 if the text is not found

Both methods accept a second parameter as the starting position for the search:

```javascript
    let str = "Please locate where 'locate' occurs!";
    str.indexOf("locate", 15)    // Returns 21
```

The `lastIndexOf()` methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.

```javascript
    let str = "Please locate where 'locate' occurs!";
    str.lastIndexOf("locate", 15)    // Returns 7
```

### 3. String.search()

The `search()` method searches a string for a specified value and returns the position of the match:

```javascript
    let str = "Please locate where 'locate' occurs!";
    str.search("locate")     // Returns 7
```

### 4. String.match()

The `match()` method searches a string for a match against a regular expression, and returns the matches, as an Array object.

```javascript
    let text = "The rain in SPAIN stays mainly in the plain";
    text.match(/ain/g)    // Returns an array [ain,ain,ain]
```

**Syntax:**

`string.match(regexp)`

regexp | Required. The value to search for, as a regular expression.
------- | -------
Returns|An Array, containing the matches, one item for each match, or null if no match is found

```javascript
    let text = "The rain in SPAIN stays mainly in the plain";
    text.match(/ain/gi)   // Returns an array [ain,AIN,ain,ain]
```

### 5. String.includes()

The `includes()` method returns true if a string contains a specified value.

```javascript
    let text = "Hello world, welcome to the universe.";
    text.includes("world")    // Returns true
```

**Syntax:**

`string.includes(searchvalue, start)`

parameter | explain
------- | -------
searchvalue | Required. The string to search for
start | Optional. Default 0. Position to start the search
Returns: | Returns true if the string contains the value, otherwise false
JS Version: | ES6 (2015)

```javascript
    let text = "Hello world, welcome to the universe.";
    text.includes("world", 12)    // Returns false
```

## 6. String.startWith()

The `startsWith()` method returns true if a string begins with a specified value, otherwise false:

```javascript
    let text = "Hello world, welcome to the universe.";

    text.startsWith("Hello")   // Returns true
```

**Syntax:**

`string.startsWith(searchvalue, start)`

Parameter | Description
----------|------------
searchvalue | Required. The value to search for.
start | Optional. Default 0. The position to start the search.

## VII. String templates

### 1. Interpolation

Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

**Syntax:**

`${...}`

**Example:**

```javascript
    let firstName = "John";
    let lastName = "Doe";

    let text = `Welcome ${firstName}, ${lastName}!`;
    //result: text = "Welcome John, Doe!"

    let price = 10;
    let VAT = 0.25;

    let total = `Total: ${(price * (1 + VAT).toFixed(2)}`;
    //result: Total: 12.50
```

## VIII. Number method

### 1. .toString()

```javascript
    let x = 23;
    x.toString();
    // return '23'
```

### 2. .toFixed()

```javascript
    let x = 2.345;
    x.toFixed(2)// x = 2.35
    x.toFixed(1) // x= 2.3
    x.toFixed(4)// x = 2.3450
```

## 3. .toPrecision()

```javascript
    let x = 2.345;
    x.toPrecision() // x= 2.345
    x.toPrecision(1) // x = 2
    x.toPrecisoin(3) // x = 2.35
```

### 4. Convert variable to numbers

There are 3 JavaScript methods that can be used to convert variables to numbers:

- The `Number()` method
- The `parseInt()` method
- The `parseFloat()` method

These methods are not number methods, but global JavaScript methods.

### 5. Number properties

Property | Description
---------|------------
MAX_VALUE | Returns the largest number possible in JavaScript
MIN_VALUE | Returns the smallest number possible in JavaScript
POSITIVE_INFINITY | Represents infinity (returned on overflow)
NEGATIVE_INFINITY | Represents negative infinity (returned on overflow)
NaN | Represents a "Not-a-Number" value

## IX. Array Method

### 1..toString() and .join()

The JavaScript method `toString()` converts an array to a string of (comma separated) array values.

```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo").innerHTML = fruits.toString();
    //result: Banana,Orange,Apple,Mango
```

The `join()` method also joins all array elements into a string.

It behaves just like `toString()`, but in addition you can specify the separator:

```Javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.join("*");
    //result: Banana * Orange * Apple * Mango
```

### 2. pop(), push(), shift()

Method | Description |Return
-------|-------------|------
pop()|removes the last element from an array|returns the value that was "popped out"
push()|adds a new element to an array (at the end)|returns the new array length
shift()|removes the first array element and "shifts" all other elements to a lower index|returns the value that was "shifted out"
unshift()|adds a new element to an array (at the beginning), and "unshifts" older elements|returns the new array length

### 3. Splice()

**Syntax:**

`array.splice(p_splice, num_remove, e1, e2,... )`
Parameter | Description
----------|------------
`p_splice` | which index should new element be added in
`num_remove` | number of elements that should be removed
`e1, e2` | new elements added in

- This method will change the origin array
- Return array elements that are removed from  origin array

```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 2, "Lemon", "Kiwi"); 
    // result: ["Banana", "Orange","Lemon", "Kiwi"]  

    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(0, 1);   // Removes the first element
    //result:  ["Orange", "Apple", "Mango"]
```

### 4. Slice()

**Syntax:**

`array.slice(start, end)`

- The `slice()` method will slice out a part of origin array from `start` index to `end`, not included `end` index.
- The `slice()` method creates a new array. It does not remove any elements from the source array.

```javascript
    let a = [1,2,3,4,5,6];
    a.slice(2,4);
    // a stay remain and the method return [3,4]
    a.slice(2);
    // return [3,4,5,6]
```

## X. Array Sort

- By **default**, the `.sort()` method will compare all element like string with string, which mean:

```javascript
    let a = [1,3,1,5,1,200,30];
    a.sort();
    //result: [1, 1, 1, 200, 3, 30, 5];
```

- to solve this problem, we use a function inside method:

```javascript
    array.sort(function (a,b) {
        return a - b;
    })
```

**Explain:**

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

- If the result is negative a is sorted before b.

- If the result is positive b is sorted before a.

- If the result is 0 no changes are done with the sort order of the two values.

So now, if we want to sort in reverse order, just change the return value form `return a-b` to `return b-a`

```javascript
    let a = [1,3,1,5,1,200,30];
    a.sort(function (a,b) { return a - b});
    //result: [1, 1, 1, 3, 5, 30, 200];
```

**Sorting an array in random order:**

```javascript
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return 0.5 - Math.random()});
```

## XI. Array Iteration

Method | Description | Return
-------|-------------|-------
forEach()| calls a function (a callback function) once for each array element|undefined
map()|performing a function on each array element and does not change the original array| new array with each element applied function
filter()|applied a test function to each array's element|new array with all elements that pass the test function
reduce()|- runs a function on each array element to produce (reduce it to) a single value<br>- works from left-to-right in the array|return value that applied by the function
every()|check if all array values pass a test function| true if all element pass or false if at least 1 element doesn't pass
some()|check if some array values pass a test.|true if at least 1 element pass or false if all elements don't pass.
indexOf()| searches an array for an element value| the first positon where value be found if not found -> return -1
lastIndexOf()|the same as Array.indexOf()| the position of the last occurrence of the specified element.
includes()|This allows us to check if an element is present in an array (including NaN, unlike indexOf).|return true if appear or false in reverse
find()|returns the value of the first array element that passes a test function|first value that pass
findIndex()|returns the index of the first array element that passes a test function|the index of first value that pass test
from()|returns an Array object from any object with a length property or any iterable object| array
keys()|returns an Array Iterator object with the keys of an array|index / key of array

**Example:**

**forEach:**

```javascript
    let a = [1,2,3,4,5];
    function myFunc(value) {
        console.log(value);
    }
    a.forEach(myFunc);
    //result: 1 2 3 4 5
```

**map:**

```javascript
    let a = [1,2,3,4,5];
    function myFunc(value) {
        value += 1;
    }
    var b = a.map(myFunc);
    //result: b = [2,3,4,5,6];
    // a stay remain
```

**filter:**

```javascript
    let a = [1,2,3,4,5,6];
    function myFunc(value) {
        return value > 3;
    }
    a.filter(myFunc);
    //result: [4,5,6];
```

**reduce:**

```javascript
    let a = [1,2,3,4,5,6];
    function myFunc(value1, value2) {
        return value1 + value1;
    }
    a.reduce(myFunc)
    //result: 21
```

**every and some:**

```javascript
    let a = [1,2,3,4,5,6];
    function myFunc(value) {
        return value >4;
    }
    a.every(myFunc)
    //result: false
    a.some(myFunc)
    //result: true
```

**indexOf and lastIndexOf:**

```javascript
    let a = [1,2,3,2,4,5];
    var b = a.indexOf(2); // result: 1
    var b = a.lastIndexOf(2); // result: 3
    var b = a.indexOf(2, 2); // result: 3
    var b = a.indexOf(2, 4); // result: -1
```

**includes:**

```javascript
    const fruits = ["Banana", "Orange", "Apple", "Mango"];

    fruits.includes("Mango"); // is true
```

**find:**

```javascript
    let a = [2,3,4,5,6];
    function myFunc(value) {
        return value >4;
    }
    a.find(myFunc);
    //result: 5
```

