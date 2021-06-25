let productItem = document.querySelectorAll('.product-item');
let titleProdItem = document.querySelectorAll('.title-prod-main');

//productItem.forEach((item, () => item.addEventListener('mouseenter', (() => titleProdItem.style.display = 'flex'))));
// productItem.addEventListener('mouseenter', (() => titleProdItem.style.display = 'flex'));
// productItem.addEventListener('mouseleave', (() => titleProdItem.style.display = 'none'));
productItem.forEach(function(e) {
    console.log(e);
    e.addEventListener('mouseenter', function(item) {
        let styl = item.target.children[0];
        console.log('visisble');
        styl.style.display = 'flex';
    })
});


productItem.forEach(function(e) {
    console.log(e);
    e.addEventListener('mouseleave', function(item) {
        let styl = item.target.children[0];
        console.log('none');
        styl.style.display = 'none';
    })
});