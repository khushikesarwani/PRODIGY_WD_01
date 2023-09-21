window.addEventListener('scroll',()=>{
  const scrolled=window.scrollY;
 
  if(scrolled>486)
  {
  document.querySelector('.container').classList.add('gradient-background');
  

  }
  if(scrolled<486){
      document.querySelector('.container').classList.remove('gradient-background');
     
  }
});

// for hamburger toggler
var toggler=document.querySelector('.mytoggle');
toggler.addEventListener("click",handleClick);
function handleClick(){
  document.querySelector('.menu').classList.toggle('show');

      
}

// for making the form show on clicking the register button
var formdisp= document.querySelector('.register');
formdisp.addEventListener("click",handleform);
function handleform(){
  document.querySelector('.box').classList.toggle('showform');
  document.querySelector('.main').classList.toggle('hidecontent');
}

window.addEventListener('scroll',reveal2);
function reveal2(){
    var reveals=document.querySelectorAll('.reveal2');
    for(var i=0;i<reveals.length;i++)
    {
    var windowheight=window.innerHeight;
    var revealtop=reveals[i].getBoundingClientRect().top;
    var revealpoint=150;
    if(revealtop<windowheight-revealpoint){
        reveals[i].classList.add('reveal2-active');
    }
    else{
        reveals[i].classList.remove('reveal2-active');
    }
}
}