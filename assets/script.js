$.(document).ready(function(){
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
                //finish color setting with class
            }

        })
     
    }

    colorChanger();



    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    //add hours 
    


















})