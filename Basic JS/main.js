/*
alert("Test Alert");
*/

//==============variable=====================
/*
console.log("Hello log");
console.error("Hello error");
console.warn("Hello warning");

document.write("Hello writre");
*/


//var,let,const
//print
/*
let age=30;
age = 35;

console.log(age);
*/


//==============loop & function========================
/*
function start()
{
    for(let i=0; i<5; i++){
        console.log(i);
        document.write(i);
    }
}
start();
*/


/*
//============String, number, null, undefined, boolean=================
const name = 'Naiim';
const age = 35;
const isHot = true;
const rating=5.5;
const x = null;
const y = undefined;
let z;

console.log(typeof isHot);
*/


/*
//concatanetion
const name='naiim';
const age ='35';

//old
console.log('My name is ' +name+ ' and my age is ' +age);

//new
//Tamplate string
console.log(`My name is ${name} and I am ${age}`);
//or
const hello =`My name is ${name} and I am ${age}`;
console.log(hello);
*/


//=================simple code================
/*
const s = 'Hello Everyone!';

//console.log(s.length);
//console.log(s.toUpperCase());
//console.log(s.toLowerCase());
console.log(s.substring(5,14).toUpperCase());
//console.log(s.split(''));
*/

/* 
const s = 'Technology, com, it, code';
console.log(s.split(', '));
*/



//=================Array + data stracture================

//arrays 
//old
/*const numbers = new Array (1,2,3,4,5);
console.log(numbers);
*/


/*
const colors = ['red','green','blue', 10, true ];
//colors[1] = 'black';  //insert num position
//colors.unshift('black');  //insert first
//colors.push('black');  //push last
//colors.shift();  //first delete
//colors.pop();
//colors[3] = 'new value';

console.log(colors);
console.log(colors[3]);
console.log(colors.indexOf("blue"));
*/





//================object=====================
/*
const person = {
    firstName: 'Abu',
    lastName: 'Naiim',
    age: 40,

    hobbies: ['music','movies','travel'],

    address: {
        city: 'Dhaka',
        zipCode: 1000
    },
}
person.email = 'naiim@gmail.com'; //add

console.log(person);
//console.log(person.address);
//console.log(person.firstName,  person.lastName);
//console.log(person.hobbies[1]);
//console.log(person.address.city);

//distracting methode
//const {firstName, lastName, address:{city}} = person;
//console.log(firstName, lastName, city);

*/


/*
const todo = [
    {
        id: 1,
        text: 'hi,I am Naiim',
        isCompleted: true
    },

    {
        id: 2,
        text: 'hi,I am Rayhan',
        isCompleted: true
    },

    {
        id: 3,
        text: 'hi,I am Apurbo',
        isCompleted: false
    },
]
//console.log(todo);
//console.log(todo[2]);
console.log(todo[2].text);
*/


/*
//==============syntax=================
let x,y,z;
x=2;
y=4;

z= x ** y;
console.log(z);
*/

//===================conditional statement===========================
/*
const x = 11;
if(x==10)
{
	console.log("10 print")
}
else 
{
	console.log('Not 10 print')
}
*/
/*
const x = 9;

if(x==10)
{
	console.log("x is equal")
}
else if(x > 10)
{
	console.log("x is greater than 10")
}
else 
{
	console.log('x is less than 10')
}
*/
/*
const x = 11;

const color = x>10 ? 'red' : 'green'
console.log(color)
*/


//============== simple code =================
/*
var num = 5;
var result = num * num;
//console.log(result);
document.write("Square = " +result +"<br>");

var num = 6;
var result = num * num;
//console.log(result);
document.write("Square = " +result+"<br>");

var num = 9;
var result = num * num;
//console.log(result);
document.write("Square = " +result+"<br>");
*/




//================ function================
/*
function square(num1,num2)
{
var result = num1 * num2;
document.write("Square = " +result +"<br>");
}
square(6,2);
square(7,2);
square(8,2);
square(9,2);
*/

/*
function square(num1,num2,num3)
{
var result = (num1 + num2)* num3;
return result;
}
var x = square(3,4,5);
document.write(x);
*/

/*
function greetings()
{
document.write("Hello document.write" +"<br>");
console.log("Hello console.log");
}
greetings();
greetings();
greetings();
*/

/*
//or
const greetings = function(){
    document.write("Hello document.write" +"<br>");
    console.log("Hello console.log");
}
greetings();
*/

/*
//Parameters & Arguments
const greetings = function(firstname,lastname){
    console.log(`Good Day ${firstname} ${lastname}`);
    document.write(`Good Day ${firstname} ${lastname} <br>`);

}
greetings('Abu', 'Naiim');
greetings('Abu', 'Naiim');
greetings('Abu', 'Naiim');
*/

/*
//ES5
var sum = function()
{
    var a = 5;
    var b = 10;
    return a+b;
}
console.log(sum());


//ES6
var a = 5;
var b = 10;
//var sum = ()=>{return a+b}
var sum = ()=> a+b
console.log(sum());
//or
var sum = (a,b,c)=> a+b+c
console.log(sum(3,20,6));
*/



//===========Factory Function================

//object
/*const circle = {
    radious:1,
    position:{
        x=1,
        y=1
    },
    isVisiting:true,

    draw: function(){
        console.log('drow');
    }
};*/
/*
function createCircle(radius){
return {
    radius,
    draw(){
        console.log('drow');
    }
};
}
const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(3);
console.log(circle2);
*/


//===============Constructor Function==================

//camel notation : oneTwoThree
//pascal notation : OneTwoThree
/*
function Student(firstName,lastName,dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
       return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${firstName} ${lastName}`;
     }
}
//Instantiate Object
const student1 = new Student('Abu', 'Naiim', '4-22-2021');

//console.log(student1);
//console.log(student1.dob);
//document.write(student1.dob)
//console.log(student1.getBirthYear());
console.log(student1.getFullName());
*/


//====================Class, Inheritance using object====================
/*
//class
class Student{
    //constructor
    constructor(name,age,cls)
    {
        this.myname = name;
        this.myage = age;
        this.mycls = cls;
    }
    //method
    studentProfile()
    {
        console.log(`name: ${this.myname}, age: ${this.myage}, class: ${this.mycls}`);
    }
}
const student1 = new Student('Naiim','21','CSE');
student1.studentProfile();

const student2 = new Student('Apurbo','21','CSE');
student2.studentProfile();
*/

/*
class Student{
   constructor(name,age,cls)
    {
        this.myname = name;
        this.myage = age;
        this.mycls = cls;
    }
    //method
    studentProfile()
    {
        return `name: ${this.myname}, age: ${this.myage}, class: ${this.mycls}`;
    }
}


//Inheritance
class Player extends Student
{
    constructor(name,age,cls,game)
    {
        super(name,age,cls);
        this.mygame = game;
    }
 //method
   player_profile()
   {
     return `${super.studentProfile()}. Favourite Play: ${this.mygame}`;
   }
}

const student1 = new Player('Naiim','21','CSE','football');
console.log(student1.player_profile());
*/



//=================Understanding 'this' Keyword================
//method ->object for this
//function -> global (window, global) for this

const video = {
    title : 'a',
    play: function(){
        console.log(this)
    }
}
/*
//method ->object for this
video.stop = function()
{
    console.log(this);
}
video.stop();
*/

/*
//function -> global (window, global) for this
function videoPlay(title)
{
    console.log(this);
}
videoPlay();
*/


function Video(title)
{
    this.title = title;
    console.log(this);
}
const v = new Video('abc'); //{}



//================alert===================

/*
//window.alert('Hello');
alert('Hello');
*/