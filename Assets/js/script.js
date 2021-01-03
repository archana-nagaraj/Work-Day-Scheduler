//Pseudo code
// tell engine to load 1)html & 2)css first.
// display current day in the header
// get nearby values using jQuery traversing
// taken the text value from the sibling html description attribute
// taken the time block hour from the parent html id attribute
// set items text and time in local storage.
// load any saved data from LocalStorage - do this for each hour created. 
// get current number of hours - use of moment.js
// loop over each time blocks - check if we've moved past this time, click into css/html given classes of past, present, or future
// re-run function every 15 sec to check for currentHour update

$( document ).ready(function() {  //making sure the DOM is ready - runs HTML and CSS first
    // display current day in jumbotron
    const today = moment().format('dddd, MMMM Do YYYY'); // using moment.js
    $("#currentDay").append(today);
    $(".saveBtn").on("click", function(){
    //using jQuery Traversing
    var text = $(this).siblings(".description").val(); //Returns the value of sibling of saveButton with class .description
    var time = $(this).parent().attr("id"); //Returns the direct parent element of the saveButton
    // Store event time and text in local storage 
    localStorage.setItem(time, text);
    });
});

  // Get event time and text from local storage 
  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));


  // function to compare the current hour with blockhour and add the styling as per past, present and future hours.
function hourCheck() {
    // get the current hour using moment.js
    var currentHour = moment().hours();
    console.log("currentHour "+currentHour);

    // iterate over each hour in the timeblock and compare it with the current hour
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id"));
        console.log("BlockHour "+blockHour);
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

// repeat the function hourCheck every 15 seconds to check for current time update
setInterval(hourCheck, 15000);
hourCheck();

