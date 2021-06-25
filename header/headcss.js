let burgerMenu = document.querySelector(".burger-menu");
let hiddenMenu = document.querySelector(".hidden-menu-js");
let closeBtn = document.querySelector(".hidd-close-logo");
let expandArrow = document.querySelector('.expand-arrow');
let dropDownMenu = document.querySelector('.expand-down-menu');

expandArrow.addEventListener('mouseenter', function() {
    dropDownMenu.style.display = 'flex';
});

expandArrow.addEventListener('mouseleave', function() {
    dropDownMenu.style.display = 'none';
});


burgerMenu.addEventListener('click', change);
closeBtn.addEventListener('click', changeRev);


function change() {
    hiddenMenu.style.display = "block";
}

function changeRev() {
    hiddenMenu.style.display = "none";
}

window.addEventListener('resize', function() {
    if (window.innerWidth > 948) {
        hiddenMenu.style.display = "none";
    }
});