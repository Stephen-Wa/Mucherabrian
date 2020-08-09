$(document).ready(function () {
    $(".text").hide();
    $(".bol").click(function () {
        $(".text").fadeToggle("slow");
    });
    $(".jaza").hide();
    $(".pic").click(function () {
        $(".jaza").fadeToggle("slow");
    });
});
function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var text = document.getElementById("text").value;



    if (name === "") {
        alert("Please write your name!");

    } else if (email === "") {
        alert("Please write your email!");

    } else if (text === "") {

        alert("Please write a message");

    } else {

        alert("I have received  your message " + name + ", " + " Thanks for the feedback!!!!");
    };

}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}
