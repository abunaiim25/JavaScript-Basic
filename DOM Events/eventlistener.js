//==================box======================
/*
document.querySelector('.box').addEventListener('click',function()
{
    document.querySelector('.box').style.background ="red";
});
*/


const box = document.querySelector('.box');

box.addEventListener('mouseenter',function()
{
    box.style.background ="red";
});

box.addEventListener('mouseleave', leave_function);
function leave_function()
{
    box.style.background = "black";
    box.style.border = " 10px solid pink";
}

box.addEventListener('click', remove_function);
function remove_function()
{
    box.removeEventListener('mouseleave', leave_function);//leave_function deleted
}




//===================outer inner======================
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");
 
outer.addEventListener('click', ()=>{
    alert("Hi! Outer Div");
},false)

inner.addEventListener ('click', ()=>{
    alert("Hi! Inner Div");
},false)




//====================parent==========================

const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const circle = document.querySelector('.circle');

const getBGcolor = (selectedElement)=>{
    return window.getComputedStyle(selectedElement).backgroundColor;
};

//magicColor ->method, element, color ->parameter
const magicColor = (element, color) =>{
    return element.addEventListener('mouseenter', ()=>{
        circle.style.background = color;
    })
};

magicColor(red,getBGcolor(red));
magicColor(green,getBGcolor(green));
magicColor(blue,getBGcolor(blue));

/*//for single 
const redColorElement = getBGcolor(red);
const greenColorElement = getBGcolor(green);
const blueColorElement = getBGcolor(blue);

red.addEventListener('mouseenter',()=>{
    circle.style.background=redColorElement;
});
green.addEventListener('mouseenter',()=>{
    circle.style.background=greenColorElement;
});
blue.addEventListener('mouseenter',()=>{
    circle.style.background=blueColorElement;
});
*/