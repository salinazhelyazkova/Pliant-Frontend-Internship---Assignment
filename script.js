const imgContainer = document.querySelector('.image_container');
const dotsContainer = document.querySelector('.nav_dots');

document.getElementById('dot1').addEventListener('click', ()=>{
    imgContainer.className = 'image_container first_active'
    dotsContainer.className = 'nav_dots first_current'
});

document.getElementById('dot2').addEventListener('click', ()=>{
    imgContainer.className = 'image_container second_active'
    dotsContainer.className = 'nav_dots second_current'
});

document.getElementById('dot3').addEventListener('click', ()=>{
    imgContainer.className = 'image_container third_active'
    dotsContainer.className = 'nav_dots third_current'
});