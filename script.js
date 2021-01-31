$(document).ready(function() {
  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time, value);
  });


  
  // load any saved data from localStorage
   $("first.name").val(localStorage.getItem("first"));
   $("first.description").val(localStorage.getItem("first"));
  // JSON.parse(window.localStorage.getItem('first'));


  // display current day on page
  $("#currentDay").text(moment().format("MM DD YYYY"));
});
