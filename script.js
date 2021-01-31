

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
  
//  var btn = document.getElementById('btn');
//    btn.onclick = function () {
 //   document.getElementById('txt').remove();
  //  this.remove();
// };

  document.getElementById("reset").onclick = function() {
   document.getElementById("name1").value = "";
};
//  function reset(){
//var resetButton = document.getElementById("name1");
//if(resetButton){
//resetButton.value= "";
//}
//}
