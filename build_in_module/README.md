# JS module system note

## I. Separate file to modules

We can separate a hole big file into small files that call module and import them in a main file.

**Example:**

Now we declare an object in `Person.js`

```javascript
    function Person(_name, _age) {
        this.name = _name;
        this.age = _age;
        this.smile = function () {
            console.log("hahahaha");
        }
    }
    //Export Person as module
    module.exports = Person;
```

then we import `Person` in the main file `index.js`:

```javascript
    //Import module Person from file Person.js
    const Person = require('./Person.js');

    //now we can use Person object.
    const per1 = new Person("son", 20);

    console.log(per1);
```

## II. Node file system

Node js provides us a useful libarary with many methods. `readFileSync()` and `writeFileSync()` are 2 method that help us to read, write files in our program.

### 1. readFileSync()

First, we have to import `fs` module from node js:

```javascript
    const fs = require('fs');
```

Now we can use 2 method above.

**Syntax:**

```javascript
    fs.readFileSync(path[,options])
```

- `path`:   `string` | `Buffer` | `URL` | `integer` `filename` or `file descriptor`.
- `options`: `Object` | `string`

  - encoding `string` | `null` **Default:** null

  - flag `string` See support of file system flags. **Default:** 'r'.
- Return: `string` | `Buffer`

For example, we have a file call `data.txt` that contain a string: "Hello World!".

```javascript
    var text = fs.readFileSync('./data.txt', encoding:{'utf8'});
    //result: text = "Hello World!"
```

### 2. writeFileSync()

**Syntax:**

```javascript
    fs.writeFileSync(file, data[,options])
```

- file `string` | `Buffer` | `URL` | `integer` filename or file descriptor
- data `string` | `Buffer` | `TypedArray` | `DataView` | `Object`
- options `Object` | `string`
  - encoding `string` | `null` **Default:** 'utf8'
  - mode `integer` **Default:** 0o666
  - flag `string` See `support of file system flags`. **Default**: 'w'.

Returns `undefined`.

**Example: Write a sentence to file result.txt.**

```javascript
    fs.writeFileSync('./result.txt','This is a result sentence.');
```
