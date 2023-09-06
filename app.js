


var toggler=document.querySelector('.mytoggle');
toggler.addEventListener("click",handleClick);
function handleClick(){
  document.querySelector('.menu').classList.toggle('show');

      
}


var formdisp= document.querySelector('.register');
formdisp.addEventListener("click",handleform);
function handleform(){
  document.querySelector('.box').classList.toggle('showform');
  document.querySelector('.main').classList.toggle('hidecontent');
}
