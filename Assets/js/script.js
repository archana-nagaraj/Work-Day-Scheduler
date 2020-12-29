// display current day in jumbotron
const today = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").append(today);


//localStorage.clear(); // Remove all local storage items if any 

// making sure the DOM is ready
$( document ).ready(function() {
    console.log( "ready!" );
    $(".saveBtn").on("click", function(){
        //using jQuery Traversing
    var text = $(this).siblings(".description").val(); //Returns the value of sibling of saveButton with class .description
    console.log(text);
    var time = $(this).parent().attr("id"); //Returns the direct parent element of the saveButton
    console.log(time);
     // Store event time and text in local storage 
     localStorage.setItem(time, text);
    });
});

  // Get event time and text from local storage 
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));


 


