/*========Changing Navigation Style on Scroll===============*/ 

const header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('sticky', window.scrollY > 0)
})



/*======Highlighting active section menu item on scrolling ======= */

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', ()=>{
   let current = "";

   sections.forEach(section => {
       const sectionTop = section.offsetTop;
       const sectionHeight = section.clientHeight;
       /*
       const abc = section.offsetTop;
       console.log(abc);
       */
      if(pageYOffset >= sectionTop-(sectionHeight)/3)
      {
          current = section.getAttribute('id');
          //console.log(current);
      }
   })

   navLi.forEach(li=>{
       li.classList.remove('active');
       if(li.classList.contains(current)){
           li.classList.add('active');
       }
   })
})


/*===========Product Display ==============*/
function myFunction(small_img){
var full_img = document.getElementById('display_img');
full_img.src=small_img.src;
}