let star=document.querySelector("#stars")
let moon=document.querySelector("#moon")
let mountain1=document.querySelector("#mountain1")
let mountain2=document.querySelector("#mountain2")
let river=document.querySelector("#river")
let boat=document.querySelector("#boat")
let non=document.querySelector(".main h2")

window.onscroll= function(){
    star.style.left=window.scrollY + 'px'
    moon.style.top=window.scrollY *4 + 'px'
    mountain1.style.top=window.scrollY *2 + 'px'
    mountain2.style.top=window.scrollY *1.5 + 'px'
    river.style.top=window.scrollY + 'px'
    boat.style.top=window.scrollY + 'px'
    boat.style.left=window.scrollY *3 + 'px'
    
    non.style.fontSize = window.scrollY  + 'px'
   if(window.scrollY>92){
    non.style.fontSize = 92 + 'px'
    non.style.position= 'fixed'
   }
   if(window.scrollY>=345.6000061035156){
    non.style.display='none'
   }else{non.style.display='block'}
   if(window.scrollY >= 95){
       document.querySelector(".main").style.background=" linear-gradient(#376281 , #10001f)"
}else{ document.querySelector(".main").style.background ='none'}
}
