// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


$(document).ready(function(){
    //listen for saved button clicks
    $(".saveBtn").on("click", function(){
        //get nearby values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //save in local storage
        localStorage.setItem(time, value);
        //show notification when item is saved
        $(".notification").addClass("show");
        //eventually put class in css
        //timeout to remove notification after five seconds
        setTimeout(function(){
            $(".notification").removeClass("show");
        }, 5000)//milliseconds
    });
    //check what hour it is and adjust the styling of the text areas
    function hourUpdater(){
        var currentHour = moment().hours();
        //loop over time blocks
        $(".time-block").each(function(){
            var blockHour = parseInt($(this).attr("id").split("-")[1]);
            //check if we've moved past this time
            if (blockHour<currentHour){
                $(this).addClass("past")//add these time classes into css
            } else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
    hourUpdater();
    //setup an interval to run this hour updater function every certain amount of time
    var interval = setInterval(hourUpdater, 60000);
    //for each hour, load saved data from local storage
    $("#hour-7 .description").val(localStorage.getItem("hour-7"));
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    //continue
    //display current day on the page
    $("#currentDay").text(moment().format("dddd, MMMM Do"))
})