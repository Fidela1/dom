
// document.getElementById("demo").innerHTML = "hello World!";
// //to find html element by id
// const element = document.getElementById("demo");

// document.getElementById("demo").innerHTML = 
// "The text from the intro paragraph is: " + element.innerHTML;

// // finding html element by tag name

// const elements = document.getElementsByTagName("p");
// document.getElementById("demo").innerHTML = elements[0].innerHTML;

// // finding html element by class name

// const x = document.getElementsByClassName("intro1");
// document.getElementById("demo").innerHTML = x[0].innerHTML;

// //Finding HTML Elements by Query Selector

// const y = document.querySelector("p.intro2");
// document.getElementById("demo").innerHTML = y[0].innerHTML;


// changing html content
// document.getElementById("p1").innerHTML = "New text!";

// changing heading

// const heading = document.getElementById("h");
// heading.innerHTML = "new heading";


// to get date
document.write(Date());



function myFunction(){
    let x = document.getElementById("num").value;
    
// get value of input
    let text;
    if(isNaN(x) || x < 1 || x > 10){
        text = "invalid input";
    } 
    else{
        text = "input Ok";
    }
    document.getElementById("demo").innerHTML = text;
}