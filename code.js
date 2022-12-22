let menuToggle = document.querySelector(".menu-toggle");
let navigation = document.querySelector(".navigation");
let dropdown = document.querySelector(".drop-down");
let option = document.querySelector(".option");
menuToggle.onclick = function(){
    navigation.classList.toggle("active")
}
dropdown.onclick = function(){
    option.classList.toggle("show")
}