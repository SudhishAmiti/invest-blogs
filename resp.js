burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
right_nav = document.querySelector('.right_nav')

burger.addEventListener('click',()=>{
    right_nav.classList.toggle('v-nav');
    navlist.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');

})