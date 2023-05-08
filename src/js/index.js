function imgSlider(anything){
    document.querySelector('.adidas').src= anything;
    
}

function colorChange(color){
    const sec = document.querySelector('.sectionA');
    sec.style.background = color;
}

function toggleMenu(){
    const toggleMenu = document.querySelector('.menuToogle');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}