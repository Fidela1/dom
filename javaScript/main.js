
document.getElementById("demo1").innerHTML = "hello World!";
//to find html element by id
const element = document.getElementById("intro");
document.getElementById("demo").innerHTML =  element.innerHTML;

// finding html element by tag name

const elements = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = elements[0].innerHTML;