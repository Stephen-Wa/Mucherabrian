$(document).ready(function() {
    $(".text").hide();
    $(".bol").click(function() {
        $(".text").slideToggle("fast");
    });
    $(".jaza").hide();
    $(".pic").click(function() {
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