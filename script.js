let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}


let searchform= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
    cartitem.classList.remove('active');
}

let cartitem = document.querySelector('.cart-item-conntainer');

document.querySelector('#cart-btn').onclick = () =>
{
    searchform.classList.remove('active');
    navbar.classList.remove('active');
    cartitem.classList.toggle('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchform.classList.remove('active');
    cartitem.classList.remove('active');
}

