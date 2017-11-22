// get scripting

$(document).ready(function(){
    $('.bot,.critic,.user').show();

	var i=1;
    var interval = null;
    
    blockOne();
    
    //show initial comments
    function blockOne(){
        $('#1').show();
        interval = setInterval(function(){showComment(2);},3000);
        $('#ellipsis').show();
    }
    
    function showComment(number){   
        $("#ellipsis").hide();
        $("#"+number).show();
        clearInterval(interval);
    }
    
    $("button").click(function(){
    	submitComment();
    });
    
    $("input:text").keypress(function (e) {
        if (e.which == 13) {
           submitComment();
        }
    });
    
    $("#bladerunner").click(function(){
        $("#u1").show();
        $('#ellipsis').show();
        interval = setInterval(blockTwo,3000);
    });
        
    function blockTwo(){
        $('#3').show();
        interval = setInterval(function(){showComment(4);},3000);
        interval = setInterval(function(){showComment(5);},4000);
        interval = setInterval(function(){showComment(6);},5000);
        $('#ellipsis').show();
    }
    
    function submitComment(){
        i++; // increment "i" by +1
        $("<div>",{class:"container user",id:"u"+i}).appendTo("#chat");
        var txt = $("input:text").val();
        
        $("#"+i).text(txt);
        $("input:text").val("").focus();
         
        // Reformatted to create an empty div with ellipsis GIF 
        i++;
        $("<div>",{class:"container darker",id:i}).appendTo("#chat");
        $("<img>",{src:"images/ellipsis.gif",width:"25",height:"25"}).appendTo("#"+i);
        
        var usercount = $(".user").length;
        
        // set the next function to run in 3 seconds / 3000 milliseconds
        interval = setInterval(function(){respondComment(usercount,i);},3000);    
    }
    
    function respondComment(count,i){ 
        // remove the GIF and post a reply using if/else statement
        
        $("#ellipsis").hide();
        
        if($("#1").is(":visible")){
            $("#2").show(); 
        }
        
        /*if(count == 2){
            $("#"+i).empty().text("Did you see the first one?"); 
        } else if (count == 3){
            $("#"+i).empty().text("This sequel was written by the same screenwriter as the first movie, and builds on a lot of the same themes about the limits of artificial intelligence and the morality of abandoning the societies we created."); 
        } else if (count == 4){
            $("#"+i).empty().text("What questions do you have about the movie?");
        } else if (count == 5){
            $("#"+i).empty().text("Hang on, let me connect you with a critic!");
        }*/
        
        clearInterval(interval); // stop the interval   
    }
    
});
 
