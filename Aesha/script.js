let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-container');

let formclose = document.querySelector('#form-close');
let videobtn = document.querySelectorall('.vid-btn'); 




window.onscroll = () =>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
 }
 
 searchbtn.addEventListener('click',()=>{
searchbtn.classList.toggle('fa-times');
searchbar.classList.toggle('active');
 });

videobtn.forEach(btn =>{
   btn.addEventListener('click', ()=>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      document.querySelector('#video-slider').src = src;
   
   
   });
});


