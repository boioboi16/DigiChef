let hamburger = document.querySelector(".hamburger");
let main = document.querySelector(".main");
let lines = document.querySelectorAll(".line");
let sidebar = document.querySelector(".sidebar");
hamburger.addEventListener('click',()=>{
  lines.forEach(line=>{
    
    line.classList.toggle("animate");

  })
  hamburger.classList.toggle('move');
  sidebar.classList.toggle("open");
  main.classList.toggle("open");
})

const typed = new Typed(".type",{
  strings:["Analytics and Insights","Search Engine Optimisation","Design And Branding","Web And App Development","Direct Marketing","Media Buying and Advertising ","Social Marketing"],
  typeSpeed:50,
  backSpeed:20,
  loop:true
})