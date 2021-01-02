// display current day in jumbotron
const today = moment().format('dddd, MMMM Do YYYY'); // using moment.js
$("#currentDay").append(today);

$( document ).ready(function() {  //making sure the DOM is ready - runs HTML and CSS first
    console.log( "ready!" );
    $(".saveBtn").on("click", function(){
    //using jQuery Traversing
    var text = $(this).siblings(".description").val(); //Returns the value of sibling of saveButton with class .description
    var time = $(this).parent().attr("id"); //Returns the direct parent element of the saveButton
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


function hourCheck() {
    // get the current hout using moment.js
    var currentHour = moment().hours();
    console.log(currentHour);

    // iterate over each hour in the timeblock and compare it with the current hour
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        console.log(blockHour);
        if (blockHour < currentHour) {
            $(this).addClass("past");
          } 
          else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
          } 
          else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
          }
    });
}

hourCheck();

