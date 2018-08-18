$(document).ready(function(){
   if(window.location.hash == ''){
      window.location.hash = '#/home';
   }
   route.evaluate();
});
$(window).on('hashchange',function(){
   const content = route.evaluate();
   primaryContent.innerHTML = content;
});
