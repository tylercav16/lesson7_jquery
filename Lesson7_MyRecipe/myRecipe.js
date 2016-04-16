/*
    Program Name: Recipe Display Application
    Author: Tyler Cavanaugh
    
    Date: April 2016
    
    Filename: myRecipe.js
*/

/*global $*/

//displays and animates the next element after the current target
function display(event) {
    $(event.currentTarget).next().animate( {height: 'toggle'}, "fast");
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);

//attach event listener to h3 elements to invoke display function when clicked
$("p").hover(function() {
    $(this).css("background-color", "red");
    });
$("p").hover(display);