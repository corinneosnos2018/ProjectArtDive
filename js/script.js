// scripting


$(document).ready(function(){
	var i=0;

$("typezone").(function())
$("button").click(function(){
    	i++; // increment "i" by +1
        $("typezone",{id:i}).appendTo("#chat");
    var textfield = $("input:text").val();
    $("#"+i).text(textfield);
    $("input:text").val("").focus();
}

    $("button").click(function(){
    	submitComment();
    });
    
    $("input:text").keypress(function (e) {
        if (e.which == 13) {
           submitComment();
        }
    });
    
    function submitComment(){
        i++; // increment "i" by +1
        $("<div>",{class:"container",id:i}).appendTo("#chat");
        var txt = $("input:text").val();
        $("#"+i).text(txt);
        $("input:text").val("").focus();
    }
    
});
