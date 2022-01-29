const readMore = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');


readMore.addEventListener('click',(element)=>{
    text.classList.toggle('show-more');
    if(readMore.innerHTML === "Read More")
    {
        readMore.innerHTML = "Read Less"
    }
    else{
        readMore.innerHTML = "Read More"
    }
})
