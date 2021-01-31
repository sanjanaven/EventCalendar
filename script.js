//$(document).ready(function() {
  // listen for save button clicks
//  $(".saveBtn").on("click", function() {
    // get nearby values
//    var textContent = $("input").val().trim();
 //   var name = $(this).parent().attr("id");

    // save in localStorage
//    localStorage.setItem(name, textContent);
  });

var HTML = "index.html"; //html of the page goes here
localStorage.setItem("content", HTML);
document.write(localStorage['content']);

  
  // load any saved data from localStorage
//   $("first").val(localStorage.getItem("first"));
   // $("first.description").val(localStorage.getItem("first"));
  // JSON.parse(window.localStorage.getItem('first'));


