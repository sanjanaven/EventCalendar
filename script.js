$(document).ready(function() {
  // listen for save button clicks
  $(".btn").on("click", function() {
    // get nearby values
    var description = $(this).siblings(".description").val();
    var name = $(this).parent().attr(".name");

    // save in localStorage
    localStorage.setItem(name, description);
  });


  
  // load any saved data from localStorage
   $("first.name").val(localStorage.getItem("first"));
   $("first.description").val(localStorage.getItem("first"));
  // JSON.parse(window.localStorage.getItem('first'));


  // display current day on page
  $("#currentDay").text(moment().format("MM DD YYYY"));
});
