$(document).ready(function() {
  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time, value);
  });

$(".dropdown-menu li a").click(function(){
  $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
});
  
  // load any saved data from localStorage
  // $("#hour-9 .description").val(localStorage.getItem("first"));
  JSON.parse(window.localStorage.getItem('first'));
 // $("#hour-10 .description").val(localStorage.getItem("hour-10"));
 // $("#hour-11 .description").val(localStorage.getItem("hour-11"));
 // $("#hour-12 .description").val(localStorage.getItem("hour-12"));
 // $("#hour-13 .description").val(localStorage.getItem("hour-13"));
 // $("#hour-14 .description").val(localStorage.getItem("hour-14"));
 // $("#hour-15 .description").val(localStorage.getItem("hour-15"));
 // $("#hour-16 .description").val(localStorage.getItem("hour-16"));
 // $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // display current day on page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
