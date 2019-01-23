var menuTrigger = document.getElementsByClassName("menu-trigger")[0];
var side = document.getElementsByClassName('menu-parent')[0];
menuTrigger.addEventListener( "click" , function(el){
if(side.classList.contains("active")){
  side.classList.remove("active");
 }else{
  side.classList.add("active");
 }
});
function goBack() {
  window.history.back();
}
