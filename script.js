const menuIcon = document.getElementById('MenuIcon')
const NavLinks = document.getElementById('Navlinks')
const CloseMenuIcon = document.getElementById('CloseMenuIcon')
const copyrightYear = document.getElementById('copyrightYear')
console.log(copyrightYear)

let today = new Date()
let currentYear = today.getFullYear()


 copyrightYear.innerText = currentYear

menuIcon.addEventListener('click',function(){
 NavLinks.style.display='flex'
 menuIcon.style.display='none'

})
CloseMenuIcon.addEventListener('click',function(){
    NavLinks.style.display='none'
    menuIcon.style.display='block'

   
   
   })


