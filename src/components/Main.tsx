import { useEffect, useState } from "react";
import FlashCard from "../models/FlashCard";
import "./Main.css";
import Card from "./Card";

const Main = () => {
  const [deck, setDeck] = useState<FlashCard[]>([]);

  const [HTML] = useState<FlashCard[]>([
    {
      question: ["How do we link our style sheet in our HTML?"],
      answer: [
        "in the head of our HTML",
        `<link rel="stylesheet" href="style.css" />`,
      ],
    },
    {
      question: ["An article is use for...?"],
      answer: [
        "Any part of the page that is planned on being sent out to more than one place. Like a news article that could show up on new york times and the daily news",
      ],
    },
    {
      question: [
        "How do we apply attributes to an element? (class, id, etc.)?",
      ],
      answer: [
        "inside of the opening tag",
        "<div class='blah' id='hoblah'> </div>",
      ],
    },
    {
      question: ["What do you need in a form element?"],
      answer: [
        "At least one input with label, and a button",
        "<form>",
        "<label for='blah'> Label1 </label>",
        "<input type='text' name='blah' id='blah' />",
        "<button>Submit</button>",
        "</form>",
      ],
    },
    {
      question: ["How do you link a label with the input?"],
      answer: [
        "by making the for attribute on the label match the id attribute on the input",
        "<label for='thisMustMatch'> Label1 </label>",
        "<input type='text' name='blah' id='thisMustMatch' />",
      ],
    },
    {
      question: ["What are h1, h2, h3... elements for?"],
      answer: [
        "Heading tags signify importance to webpage (NOT USED FOR SIZE)",
      ],
    },
    {
      question: ["A div is used for..."],
      answer: ["general styling purposes"],
    },
    {
      question: ["A section element is used for..."],
      answer: ["A part of the application that includes at least one heading"],
    },
  ]);
  const [styling] = useState<FlashCard[]>([
    {
      question: [
        "What is the property that is used to generate space around an element's content, inside of any defined borders?",
      ],
      answer: ["Padding"],
    },
    {
      question: [
        "What is the property use to create space around an element outside of any definded borders?",
      ],
      answer: ["Margin"],
    },
    {
      question: [
        "Which positioning allows an element to stay in the flow of the document but can be effected by offsets> (top, right, bottom, left)",
      ],
      answer: ["Relative"],
    },
    {
      question: [
        "Which positioning allows an element to be removed from the flow of the document and can be effected by offsets",
      ],
      answer: ["Absolute"],
    },
    {
      question: [
        "Which positioning allows an element to stay regaurdless of scroll and be effected by offsets?",
      ],
      answer: ["Fixed"],
    },
    {
      question: ["How can we center an element with offsets?"],
      answer: [
        "position: absolute",
        "left: 50%",
        "top: 50%",
        "transform: translate(-50%, -50%)",
      ],
    },
    {
      question: ["How can we center an element using flexbox?"],
      answer: [
        "display: flex",
        "justify-content: center",
        "align-items: center",
      ],
    },
    {
      question: ["How do we make our styling responsive?"],
      answer: ["media queries", "@media only screen and (min-width: 768px) {}"],
    },
    {
      question: ["How do we select an element, class, and id?"],
      answer: ["element - tagName {}", "class - .className {}", "id - #id {}"],
    },
    {
      question: [
        "What is the difference between these selectors?",
        "div .nav {}",
        "div.nav {}",
        "div > .nav {}",
      ],
      answer: [
        "an element with class 'nav' somewhere inside of a div",
        "a div with a class of 'nav'",
        "an element with class of 'nav' directly nested inside of a div",
      ],
    },
  ]);
  const [variablesFunctions] = useState<FlashCard[]>([
    {
      question: ["What two declarative words do we use?"],
      answer: ["let and const"],
    },
    {
      question: ["What is the difference between let and const"],
      answer: ["let allows reassignment const does not"],
    },
    {
      question: [
        "What are the placeholders that a function needs to do it's job?",
      ],
      answer: ["Parameters"],
    },
    {
      question: ["How do we call/envoke a function with parameters?"],
      answer: [
        "function name followed by () with arguments for each parameter myFunction()",
      ],
    },
    {
      question: ["What do we place in the () when we envoke a function?"],
      answer: ["arguments myFunction(value)"],
    },
    {
      question: [
        "What function declaration type is this?",
        "const myFunction = function(){}",
      ],
      answer: ["function declration"],
    },
    {
      question: [
        "What function declaration type is this?",
        "const myFunction = () => {}",
      ],
      answer: ["arrow function"],
    },
    {
      question: [
        "What function declaration type is this?",
        "function myFunction(){}",
      ],
      answer: ["function expression"],
    },
    {
      question: [
        "What does the variable X hold as it's value?",
        "const myFunction = () => return 'hello';",
        "let X = myFunction()",
      ],
      answer: ["X = 'hello'"],
    },
    {
      question: [
        "What is the name of this function?",
        "const potato = (zebra) => {return 250;}",
      ],
      answer: ["potato!"],
    },
    {
      question: [
        "What is the name of this functions paramater(s)?",
        "const myFunction = (one, two) => {}",
        "myFunction(three,four)",
      ],
      answer: ["one and two"],
    },
    {
      question: [
        "What is the name of this functions argument(s)?",
        "const myFunction = (one, two) => {}",
        "myFunction(three,four)",
      ],
      answer: ["three and four"],
    },
    {
      question: ["How do we test a function that returns a value?"],
      answer: [
        "we envoke the function inside of a console.log()",
        "console.log(myFunction())",
      ],
    },
  ]);
  const [ifElse] = useState<FlashCard[]>([
    {
      question: ["What is the if/else template?"],
      answer: ["if ( condition ) {", "} else if ( condition2 ) {", "} else{}"],
    },
    {
      question: [
        "What would this if/else chain return?",
        "let x = true",
        "let y = false",
        "if ( x ) {",
        "return true;",
        "} else {",
        "return false",
        "}",
      ],
      answer: ["True"],
    },
    {
      question: [
        "What would this if/else chain return?",
        "let x = true",
        "let y = false",
        "if ( y ) {",
        "return true;",
        "} else {",
        "return false",
        "}",
      ],
      answer: ["false"],
    },
    {
      question: [
        "What would this if/else chain return?",
        "let x = true",
        "let y = false",
        "if( x && y ) {",
        "return true;",
        "} else {",
        "return false",
        "}",
      ],
      answer: ["False", "&& - and operator meaning both have to be truthy"],
    },
    {
      question: [
        "What would this if/else chain return?",
        "let x = true",
        "let y = false",
        "if( x || y ){",
        "return true;",
        "} else {",
        "return false",
        "}",
      ],
      answer: [
        "True",
        "|| - or operator meaning if either are truthy it fires",
      ],
    },
    {
      question: ["What does this mean?", "x !== y"],
      answer: ["x is not equal to y"],
    },
    {
      question: ["What does this mean?", "!x"],
      answer: ["the opposite of x"],
    },
    {
      question: [
        "What is the name of this and what would be the return value?",
        "20 > 15 ? 'yes' : 'no'",
      ],
      answer: ["terenary operator, it will return 'yes'"],
    },
    {
      question: [
        "What will return from this if/else chain?",
        "let x = 10;",
        "if ( x < 7 ){",
        "return 'yes'",
        "} else if ( x > 9 ) {",
        "return 'no'",
        "} else {",
        "return 'maybe'",
        "}",
      ],
      answer: ["no", "x is greater than 9 so the second block fires"],
    },
  ]);
  const [loops] = useState<FlashCard[]>([
    {
      question: ["What loop is best for a known start and end?"],
      answer: ["for loop"],
    },
    {
      question: [
        "what is the best loop for going through an array all the way to the end?",
      ],
      answer: ["for...of loop"],
    },
    {
      question: ["what loop will go until your condition is false or a break?"],
      answer: ["while loop"],
    },
    {
      question: ["What is the template for a for loop?"],
      answer: ["for (let i = start; i < end; i += step){}"],
    },
    {
      question: ["What is the template for a while loop?"],
      answer: ["while (true) {", "break;", "}"],
    },
    {
      question: ["What is the template for a for...of loop?"],
      answer: ["for (let item of array/string) {}"],
    },
    {
      question: ["What keyword will allow you to exit a loop right away?"],
      answer: ["break;"],
    },
  ]);
  const [objectsArrays] = useState<FlashCard[]>([
    {
      question: ["What brackets signify an object?"],
      answer: ["curly brackets {}"],
    },
    {
      question: ["What are the sets of propertys in an object called?"],
      answer: ["key/value pairs"],
    },
    {
      question: ["what is the way we access a property inside an object?"],
      answer: [
        "dot notation/bracket notation",
        "object.property / object[property]",
      ],
    },
    {
      question: ["How do we modify an object's key/value pairs?"],
      answer: [
        "dot notation / bracket notation with an = to set the value",
        "let object = {property1: value1, property2: value2}",
        "object.property1 = value3",
        "object = {property1: value3, property2: value2}",
      ],
    },
    {
      question: [
        "How would you console.log() the dog's name?",
        "let family = {",
        "dog: {",
        "name: 'bingo'",
        "}",
        "}",
      ],
      answer: ["console.log(family.dog.name)"],
    },
    {
      question: ["what brackets signify arrays?"],
      answer: ["square brackets []"],
    },
    {
      question: ["how do we access a particular spot in an array?"],
      answer: ["index"],
    },
    {
      question: ["how do we modify an element in an array?"],
      answer: [
        "using the index and = sign array[index] = to the value that you want that spot to be",
      ],
    },
    {
      question: [
        "how do we access the name of the second dog?",
        " let pets = [",
        "{name: 'harry'},",
        " {name: 'larry'},",
        " {name: 'jerry'},",
        "]",
      ],
      answer: ["pets[1].name"],
    },
    {
      question: ["how do we get the last index of any array?"],
      answer: ["array.length - 1"],
    },
  ]);
  const [arrayMethods] = useState<FlashCard[]>([
    {
      question: ["what is the best array method to add to an array"],
      answer: ["array.push() / array.unshift()"],
    },
    {
      question: ["what array method is synonymous with delete?"],
      answer: ["array.splice()"],
    },
    {
      question: [
        "what array method loops through the whole array allowing you to do something to each element in the array?",
      ],
      answer: ["array.forEach() / array.map()"],
    },
    {
      question: [
        "what array method will go through an array and return the FIRST element to pass it's condition?",
      ],
      answer: ["array.find()"],
    },
    {
      question: [
        "what array method will return a new array with only elements passing the given condition?",
      ],
      answer: ["array.filter()"],
    },
    {
      question: [
        "what array method will return either true or false depending on the given condition?",
      ],
      answer: ["array.some() / array.contains()"],
    },
    {
      question: [
        "what array method is best used on superlative functions? (min, max, avg, sum)",
      ],
      answer: ["array.reduce()"],
    },
    {
      question: ["what array method is best to grab a section of a string?"],
      answer: ["array.slice() / string.substrings()"],
    },
    {
      question: [
        "what array method is best to find the index of an element in an array?",
      ],
      answer: ["array.findIndex()"],
    },
    {
      question: ["How do you find the sum of an array of numbers with reduce?"],
      answer: ["array.reduce( ( ac , cv ) => ac + cv)"],
    },
    {
      question: [
        "How do you find the max of an array of objects with a price property?",
      ],
      answer: ["array.reduce( ( ac , cv ) => ac.price > cv.price ? ac : cv )"],
    },
  ]);
  const [DOM] = useState<FlashCard[]>([
    {
      question: ["What does DOM stand for?"],
      answer: ["Document Object Model"],
    },
    {
      question: ["How do we pull in HTML nodes into our JavaScript?"],
      answer: ["document.querySelector"],
    },
    {
      question: ["What does document.querySelectorAll return?"],
      answer: ["A NodeList (array of objects)"],
    },
    {
      question: ["What does document.querySelector return?"],
      answer: ["A Node (object)"],
    },
    {
      question: ["How do we add an attribute to a Node?"],
      answer: ["node.setAttribute('attribute', 'value')"],
    },
    {
      question: ["How do we add and/or remove classes from a Node?"],
      answer: [
        "node.classList.add() ",
        "node.classList.remove()",
        "node.classList.toggle()",
      ],
    },
    {
      question: [
        "What are the methods we use to target our querySelector for class, id, and element?",
      ],
      answer: [
        "class - document.querySelector('.className')",
        "id - document.querySelector('#id')",
        "element - document.querySelector('tagName')",
      ],
    },
    {
      question: ["How do you modify a Node's property such as innerText?"],
      answer: ["dot notation", "node.innerText = 'blah'"],
    },
    {
      question: [
        "How do you change a style of a Node such as background-color?",
      ],
      answer: [
        "accessing the style property",
        "node.style.backgroundColor = 'blue'",
      ],
    },
    {
      question: ["How do you get rid of a node from the DOM entirely?"],
      answer: ["node.remove()"],
    },
    {
      question: [
        "Because a NodeList is an array of objects this allows us to do things like...?",
      ],
      answer: [
        "use index to select particular Node",
        "Allows you to use array methods on the NodeList like .forEach()",
        "Use index and dot notation to access properties on the Nodes in the NodeList",
      ],
    },
  ]);
  const [events] = useState<FlashCard[]>([
    {
      question: ["How do we add an event listener to a Node?"],
      answer: ["node.addEventListener('event', ()=>{})"],
    },
    {
      question: ["How do we remove an event listener to a Node?"],
      answer: [
        "node.addEventListener('event', myFunction)",
        "node.removeEventListener('event', myFunction)",
        "Must be a named function to be able to remove",
      ],
    },
    {
      question: ["What event do we use for a form?"],
      answer: [
        "A submit event",
        "form.addEventListener('submit', (e)=>{e.preventDefault();})",
      ],
    },
    {
      question: ["What is event delegation?"],
      answer: [
        "using one event listener on a parent node in place of many event listeners on the children",
      ],
    },
    {
      question: [
        "How do we specify what to click when using event delegation?",
      ],
      answer: [
        "making a condition based on class/tagName",
        "node.addEventListener('click', ()=>{",
        "if (e.target.classList.contains('blah')) {}",
        "if (e.target.tagName === 'DIV') {}",
        "})",
      ],
    },
    {
      question: ["In a click event how do we say 'the thing we clicked'?"],
      answer: ["event.target"],
    },
    {
      question: ["How do we pull in inputs for a form submit event?"],
      answer: [
        "querySelector inside of submit event listener and using .value",
        "form.addEventListener('submit', (e)=>{",
        "e.preventDefault()",
        "const input = document.querySelector(#input)",
        "let inputValue = input.value",
        "})",
      ],
    },
  ]);
  const [jest] = useState<FlashCard[]>([
    { question: ["What is the testing library we use?"], answer: ["Jest"] },
    {
      question: [
        "What do we use to export our functions from our script file?",
      ],
      answer: ["module.exports = {}"],
    },
    {
      question: ["What do we use to import our functions into our test file?"],
      answer: ["const {} = require('./filePath')"],
    },
    {
      question: ["What is the template for a jest test?"],
      answer: [
        "discribe( 'functionName', () => {",
        "test('testCase', () => {})",
        "});",
      ],
    },
    {
      question: ["What is the jest matcher toBe() for?"],
      answer: ["primitive data types (strings, numbers, booleans)"],
    },
    {
      question: ["What is the jest matcher toEqual() for?"],
      answer: ["Arrays and Objects"],
    },
    {
      question: [
        "in the following code block what should go in the expect and toEqual?",
        "describe('description', () => {",
        "test('functionName', () =>{",
        "let array=[];",
        "let results = addObjectToArray(object);",
        "expect(?).toEqual(?);",
        "})",
        "})",
      ],
      answer: ["array, [object]"],
    },
  ]);
  const [typeScript] = useState<FlashCard[]>([
    {
      question: ["What is typescript?"],
      answer: [
        "A strongly typed language that compiles into JavaScript for the browswer",
      ],
    },
    {
      question: ["How do we use type annotations for variables?"],
      answer: [
        "adding a : with the type to the end of the variable name",
        "let name: string = 'james'",
        "let arrayOfNames: string[] = ['a', 'b', 'c']",
      ],
    },
    {
      question: ["How do we use type annotations for functions?"],
      answer: [
        "adding return type and annotating any params",
        "const myFunction = (param1: string, param2: number):number[] => {returns array of numbers}",
      ],
    },
    {
      question: ["What is the return type of a function without a return?"],
      answer: ["void"],
    },
    {
      question: ["How do we make a parameter optional?"],
      answer: [
        "Adding a ? to the end before the type, param2 is optional",
        "const myFunction = (param1: string, param2?: number):number[] => {}",
      ],
    },
    {
      question: ["What is an interface?"],
      answer: ["An interface is a blueprint that describes an object"],
    },
    {
      question: ["What is an interface template look like?"],
      answer: [
        "interface MyInterface {",
        "property1: type",
        "property2: type",
        "}",
      ],
    },
    {
      question: ["How do you say a property is optional in an interface?"],
      answer: [
        "a ? at the end of the property name, property1 is optional",
        "interface MyInterface {",
        "property1?: type",
        "property2: type",
        "}",
      ],
    },
    {
      question: [
        "How do we type annotate something that is either a string or null?",
      ],
      answer: [
        "using the pipe | or operator but only one",
        "const thing: string | null = null;",
      ],
    },
    {
      question: ["how do we export default an interface?"],
      answer: [
        "adding 'export default' to start of interface declration",
        "export default interface MyInterface {",
        "property1: type",
        "}",
      ],
    },
    {
      question: ["How do we import our interfaces?"],
      answer: [
        "either using the quick fix option or manually typing out the import",
        "import MyInterface from '../filePath'",
      ],
    },
    {
      question: ["How do we export more than one thing?"],
      answer: ["adding 'export' to start of the declaration"],
    },
    {
      question: ["How do we import more than one thing?"],
      answer: [
        "import with destructing",
        "import { thing1, thing2 } from '../filePath'",
      ],
    },
    {
      question: ["How do we test our TypeScript files?"],
      answer: ["npx nodemon filePath/file.ts"],
    },
  ]);
  const [classes] = useState<FlashCard[]>([
    {
      question: ["What is a Class?"],
      answer: [
        "A class is like a blueprint for objects much like an interface however a Class has the ability to create objects as well",
      ],
    },
    {
      question: ["What is a Class template?"],
      answer: [
        "class MyClass {",
        "property1: type",
        "constructor( property1: type ) {",
        "this.property1 = property1;",
        "}",
        "methods(){}",
        "}",
      ],
    },
    {
      question: [
        "How do we create an instance of a Class? (use class to make object)",
      ],
      answer: [
        "using the keyword 'new' followed by the name of the Class. Here we have a Food class",
        "let hotdog: Food = new Food('hotdog');",
      ],
    },
    {
      question: ["What is the constructor in a Class?"],
      answer: [
        "A built in method used to initialize the properties of the object.",
      ],
    },
    {
      question: ["What does the constructor do in a class?"],
      answer: [
        "sets the values to the properties that are on this class. Here we have property1 being set by the constructor",
        "class MyClass {",
        "property1: type",
        "constructor( property1: type ) {",
        "this.property1 = property1;",
        "}",
        "}",
      ],
    },
    {
      question: ["How do we add a method on a Class?"],
      answer: [
        "after the constructor we create the method",
        "myMethod(params): returnType {}",
      ],
    },
    {
      question: [
        "How do we extend a Class? Or how do we make a subclass of another class?",
      ],
      answer: [
        "using our 'extends' keyword to create a subclass. Second is a subclass of First",
        "class First {}",
        "class Second extends First {}",
      ],
    },
    {
      question: ["What is inheritance and why is it important?"],
      answer: [
        "Inheritance allows new sub-classes to also contain all the properties and methods of it's parent giving them the same functionality plus anything new.",
      ],
    },
    {
      question: ["What is the 'super()' in a subclass?"],
      answer: [
        "super() is how we call the parent's constructor for any inherited properties that still need to be initalized",
      ],
    },
    {
      question: [
        "How can we override a method from the parent class on a sub-class?",
      ],
      answer: ["Simply define the same method again in the subclass."],
    },
    {
      question: ["What is Polymorphism?"],
      answer: [
        "The act of a subclass being allowed in place of a parent class. 'A square is still a rectangle' type of thing",
      ],
    },
    {
      question: ["how do you set an inital value for a property on a class?"],
      answer: [
        "setting the value when you make the property",
        "class MyClass {",
        "property1: type = 'inital value'",
        "constructor( property1: type ) {",
        "this.property1 = property1;",
        "}",
        "methods(){}",
        "}",
      ],
    },
    {
      question: ["How to set at optional property value with a Class?"],
      answer: [
        "by making the constructor parameter optional",
        "class MyClass {",
        "property1: type",
        "constructor( property1: type = 'optional value') {",
        "this.property1 = property1;",
        "}",
        "methods(){}",
        "}",
      ],
    },
    {
      question: ["What does the keyword 'this' mean?"],
      answer: [
        "this.property means that we are targeting the property that lives on the class. For example with the constructor",
        "constructor( newProperty1 ) {",
        "this.property1 = newProperty1;",
        "}",
        "this classes property1 will have the value passed as newProperty1",
      ],
    },
  ]);
  const [relationalDB] = useState<FlashCard[]>([
    {
      question: ["What is a Relational Database? (PostgreSQL)"],
      answer: [
        "A database that organizes data into one or more tables of rows and columns with a unique key for each row.",
      ],
    },
    {
      question: ["What is the name of the unique value for each row?"],
      answer: [
        "foreign key",
        "CREATE TABLE test(id SERIAL PRIMARY KEY, column2, column3...)",
      ],
    },
    {
      question: ["What data type do we use for whole numbers?"],
      answer: ["SMALLINT, INT, MEDIUMINT, BIGINT"],
    },
    {
      question: ["What data type do we use for decimal numbers?"],
      answer: ["REAL, FLOAT"],
    },
    {
      question: ["What data type is used for strings?"],
      answer: ["CHAR(LENGTH), VARCHAR(LENGTH), TEXT"],
    },
    {
      question: ["In PgAdmin, how do we make a new table?"],
      answer: ["CREATE TABLE(column1, column2, column3...)"],
    },
    {
      question: ["In PgAdmin, how do we add values to the table?"],
      answer: [
        "INSERT INTO tableName (column1, column2,column3...)",
        "VALUES(value1, value2, value3...)",
      ],
    },
    {
      question: ["In PgAdmin, How do we retrieve data froma a table?"],
      answer: ["SELECT * FROM tableName"],
    },
    {
      question: ["In PgAdmin, How do we modify data in a table?"],
      answer: ["UPDATE tableName SET property=value WHERE..."],
    },
    {
      question: ["In PgAdmin, How do we delete data within a table?"],
      answer: ["DELETE FROM tableName WHERE..."],
    },
    {
      question: ["In PgAdmin, How do we target a specific column in a table?"],
      answer: [
        "using WHERE and making a conditional query",
        "SELECT * FROM staff WHERE name='James'",
      ],
    },
    {
      question: ["In PgAdmin, How do we return the data in a sorted manner?"],
      answer: [
        "ORDER BY is how we sort data and using ASC or DESC for accending and descending order",
        "SELECT * FROM staff ORDER BY name ASC",
      ],
    },
    {
      question: ["In PgAdmin, How do we return data from more than one table?"],
      answer: [
        "With a JOIN and a corresponding key",
        "SELECT * FROM staff JOIN alumni ON staff.name = alumni.name",
      ],
    },
    {
      question: [
        "What is the difference between left/right join and inner join/join?",
      ],
      answer: [
        "inner join/join will only display the data that has a value in both tables while a left/right join will display all the data from both tables even if it doesn't match",
      ],
    },
  ]);
  const [noSQLDatabase] = useState<FlashCard[]>([
    {
      question: ["What is a noSQL database? (MongoDB)"],
      answer: [
        "It is a document store. It stores collections of documents which are JSON objects",
      ],
    },
    {
      question: ["What does a MongoDB document look like and behave as?"],
      answer: ["Just like a JS object."],
    },
    {
      question: ["What unique property will MongoDB add to EVERY document?"],
      answer: ["_id: ObjectId('f64ghe5r6gtr6e')"],
    },
    {
      question: ["In MongoDB, how do we add a document?"],
      answer: ["db.collectionName.insertOne({})"],
    },
    {
      question: ["In MongoDB, how do we list all documents?"],
      answer: [
        "db.collectionName.find()",
        "Leaving the find() method empty returns everything",
      ],
    },
    {
      question: [
        "In MongoDB, how do we switch which database we are currently using?",
      ],
      answer: ["use databaseName"],
    },
    {
      question: [
        "In MongoDB, how do we add more than one document to a collection at once?",
      ],
      answer: ["db.collectionName.insertMany([{},{}])"],
    },
    {
      question: [
        "In MongoDB, how do we return just one document based on a search?",
      ],
      answer: ["db.collectionName.findOne()"],
    },
    {
      question: [
        "In MongoDB, how do we make it so only a set amount of results are returned?",
      ],
      answer: [
        "db.collectionName.find().limit()",
        "the .limit() at the end allows it and the number you want to come back goes in the () like .limit(4) for 4 results",
      ],
    },
    {
      question: ["In MongoDB, how do we return the data in an ordered manner?"],
      answer: [
        "db.collectionName.find().sort()",
        ".sort() allows us to sort our results with a condition like .sort( {name: 1} )",
      ],
    },
    {
      question: ["In MongoDB, how do we search for more than one condition?"],
      answer: [
        "$or / $and allows the query to take in more than one condition",
        "db.collectionName.find( { $or: [{name: 'james'},{name: 'mitch'}] } )",
      ],
    },
    {
      question: ["In MongoDB, how do we use projection?"],
      answer: [
        "Projection is used to limit which fields are shown in the results",
        "db.collectionName.find({query}, {name: 1, age: -1})",
        "here we are saying show the name but don't show the age",
      ],
    },
    {
      question: [
        "In MongoDB, how do we totally subsitute the whole document with a new one?",
      ],
      answer: ["db.collectionName.replaceOne()"],
    },
  ]);

  const shuffleArray = (array: FlashCard[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const resetHandler = (choice: FlashCard[]) => {
    let flippedCards = document.querySelectorAll(".flip");
    flippedCards.forEach((card) => card.classList.remove("flip"));
    shuffleArray(choice);
    setDeck(choice);
  };

  return (
    <div className="Main">
      <header>
        <h1>Pick a topic to study!</h1>
        <div id="button-container">
          <button onClick={() => resetHandler(HTML)}>HTML</button>
          <button onClick={() => resetHandler(styling)}>Styling</button>
          <button onClick={() => resetHandler(variablesFunctions)}>
            Variables and Functions
          </button>
          <button onClick={() => resetHandler(ifElse)}>if/else</button>
          <button onClick={() => resetHandler(loops)}>Loops</button>
          <button onClick={() => resetHandler(objectsArrays)}>
            Objects and Arrays
          </button>
          <button onClick={() => resetHandler(arrayMethods)}>
            Array Methods
          </button>
          <button onClick={() => resetHandler(DOM)}>DOM</button>
          <button onClick={() => resetHandler(events)}>Events</button>
          <button onClick={() => resetHandler(jest)}>Jest</button>
          <button onClick={() => resetHandler(typeScript)}>TypeScript</button>
          <button onClick={() => resetHandler(classes)}>Classes</button>
          <button onClick={() => resetHandler(relationalDB)}>
            Relational Databases
          </button>
          <button onClick={() => resetHandler(noSQLDatabase)}>
            No SQL Databases
          </button>
        </div>
      </header>
      {deck.length > 1 && (
        <div>
          <ul>
            {deck.map((card, i) => (
              <Card key={i} card={card} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Main;
