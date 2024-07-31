$("body>div").hide();

var num; 
var virify = false ; //to make sure that user has choosed a number
$(".rate").on("click", function() { 
    $(".rate").css("background-color", "hsl(213, 19%, 18%)");
    $(this).css("background-color", "orange");
    var Snum = $(this).text(); 
    virify = true ;
    num = Snum ;
    
});

$("form").on("submit",function(event){
    if (virify){
        $("span").text(num);
        $("body>div").slideDown(900);
        event.preventDefault();
    }    
});
