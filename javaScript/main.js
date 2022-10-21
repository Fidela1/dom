
document.getElementById("demo").innerHTML = "hello World!";
//to find html element by id
const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is: " + element.innerHTML;

// finding html element by tag name

const elements = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = elements[0].innerHTML;

// finding html element by class name

const x = document.getElementsByClassName("intro1");
document.getElementById("demo").innerHTML = x[0].innerHTML;

//Finding HTML Elements by Query Selector

const y = document.querySelector("p.intro");
document.getElementById("demo").innerHTML = y[0].innerHTML;