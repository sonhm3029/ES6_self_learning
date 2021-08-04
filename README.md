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

