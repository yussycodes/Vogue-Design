const menuIcon = document.getElementById('MenuIcon')
const NavLinks = document.getElementById('Navlinks')
const CloseMenuIcon = document.getElementById('CloseMenuIcon')


 

menuIcon.addEventListener('click',function(){
 NavLinks.style.display='flex'
 menuIcon.style.display='none'

})
CloseMenuIcon.addEventListener('click',function(){
    NavLinks.style.display='none'
    menuIcon.style.display='block'

   
   
   })


