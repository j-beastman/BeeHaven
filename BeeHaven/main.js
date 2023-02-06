'use strict';


const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        //I wanna change this to sun and moon
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name' + className);
});

const MyHeading = document.querySelector('h1');
MyHeading.textContext = 'Hello World!';