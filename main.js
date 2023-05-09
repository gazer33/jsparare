const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCarrito.addEventListener('click', togglecarrito);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}




function togglemobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

function togglecarrito(){
    const ismobileMenuClosed= mobileMenu.classList.contains('inactive')
    const isAsideClosed= aside.classList.contains('inactive');
    
   // aside.classList.toggle('inactive');

   if (isAsideClosed){
    //abrir aside
if (!ismobileMenuClosed){
    m
}
    //si el mobileMenu esta open, hay que cerrarlo
   }else{
        aside.classList.add('inactive')
    }
   



}
