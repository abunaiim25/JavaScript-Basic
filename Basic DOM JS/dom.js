//==============select============================
/*
//console.log(document);
console.log(document.head);
console.log(document.title);
*/

//==============get element=================

//get Element By Id
//document.getElementById('heading1'); //give this line on console for connection test 
//document.getElementById('heading1').innerHTML = 'Changed by id';


//get ElementsBy Tag Name
//document.getElementsByTagName('h1')[0].innerHTML = 'Changed by Tag Name';


//get Elements By Class Name
//document.getElementsByClassName('para2')[0].innerHTML = 'Changed by class Name';



//====================DOM Basics===================

//document.getElementById('h1id_1');
//console.log(document.getElementById('h1id_1'));


/*
//get Element By Id
const heading1 =document.getElementById('h1id_1');
heading1.innerHTML = " Heading - 1";
//heading1.remove();
heading1.style.background ='blue';
heading1.style.color ='white';
heading1.style.padding ='5px';
*/

/*
//get ElementsBy Tag Name
const heading2 =document.getElementsByTagName('h1');
heading2[0].innerHTML = 'getElementsByTagName';
//heading2[0].remove();
heading2[1].style.background ='blue';
heading2[1].style.color ='white';
heading2.style.padding ='5px';
*/

/*
//get Elements By Class Name
const heading3 =document.getElementsByClassName('h1class');
heading3[0].innerHTML = " Hello head 1";
heading3[1].innerHTML = " Hello head 2";
*/



//=====================querySelector=====================
/*
//by class
const button = document.querySelector('.btnclass2');
//console.log(button);//test working or not working
button.style.color = "red";
*/

/*
//by id
const button = document.querySelector('#btnid1');
button.style.color = "green";
button.textContent = 'Test button';
button.style.background = 'yellow';
*/

/*
//by tag
const button = document.querySelector('button');
button.style.color = "green";
button.textContent = 'Test button';
button.style.background = 'yellow';
*/

const ul = document.querySelector('.items');

ul.firstElementChild.style.color ='green';
ul.children[1].textContent = "child 1";
ul.children[2].remove();
ul.lastElementChild.style.color = "red";

//ul.remove();

//=====================querySelectorAll =====================
const item = document.querySelectorAll('.item');
console.log(item);
