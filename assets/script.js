$(document).ready(function(){
    $(".save-btn").on("click", function(){
        var activity = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");


        localStorage.setItem(hour, activity)
        console.log(localStorage)

    });

    function colorChanger() {
        var currentHour = moment().hours();
        console.log(currentHour)
        $(".time-block").each(function(){
            var myHour = parseInt($(this).attr("id").split("-")[1]);
       
            if(myHour < currentHour) {
                $(this).addClass("past")
            } else if(myHour === currentHour) {
                $(this).addClass("present")
            } else(myHour > currentHour) {
                $(this).addClass("future")
            }
         })
     
    }

    colorChanger();

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})
