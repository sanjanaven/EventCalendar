$(document).ready(function() {
  // listen for save button clicks
  $(".saveBtn").on("click", function() {
    // get nearby values
    var textContent = $(this).siblings(".form-control").val();
    var name = $(this).parent().attr("id");

     
    localStorage.setItem(name, textContent);
  });


  
  // load any saved data from localStorage
  $("first.form-control").val(localStorage.getItem("first"));
  //  $("first.description").val(localStorage.getItem("first"));
  // JSON.parse(window.localStorage.getItem('first'));


