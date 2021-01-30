let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentTime);

function displayTime(){
    document.getElementById("currentDay").innerHTML = currentTime;
    
};
setInterval(displayTime, 1000);
displayTime()


// variables for time
//var date = moment().format("MMM Do YY");
// var currentTime = moment().format('H');
// console.log(currentTime);

//-------append date----------//
//$("#currentDay").append(date);


//---------background Updater------------------------//

var eventNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]


//--onclick event to save user input to local storage---//
$(".rowBtn").on("click", function() {
    var eventNumber = $(this).parent().attr("id");
    var textContent = $("input").val().trim();

    localStorage.setItem(eventNumber, textContent);
    console.log(eventNumber, textContent);
});

//-------Getting individual childern and setting to parent-----//
  $("#1").children("input").val(localStorage.getItem("1"));
