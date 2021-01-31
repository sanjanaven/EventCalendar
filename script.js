$(document).ready(function() {
  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
    var textContent = $(this).siblings(".description").val();
    var name = $(this).parent().attr("id");

     
    localStorage.setItem(name, textContent);
  });


  
  // load any saved data from localStorage
  $("12pm.description").val(localStorage.getItem("12pm"));
  //  $("first.description").val(localStorage.getItem("first"));
  // JSON.parse(window.localStorage.getItem('first'));


