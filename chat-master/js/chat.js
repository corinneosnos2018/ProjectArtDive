$(document).ready(function(){
    
    var i = 0; // set count to 0
    var ms = 3000; // milliseconds
    
    // when the page loads, hide all elements with class .msg
    $(".msg").hide();
    
    // run the function of "firstBlock"
    firstBlock();
    
    // this function loads the first two bot messages in the series
    function firstBlock(){
        console.log('first block ...');
        
        showEllipsis();
           
        setTimeout(
                function(){msg(1); // first
            },ms);
        
        setTimeout(
                function(){
                    msg(2); // second
                    $("#ellipsis").hide();
            },ms*2);
        
    }
    
    // this function loads the second set of bot messages in the series
    function secondBlock(){
        console.log('second block ...');
        
        showEllipsis();
           
        setTimeout(
                function(){msg(3); // third bot message
            },ms);
        
        setTimeout(
                function(){
                    msg(4); // fourth
            },ms*2);
        
        setTimeout(
                function(){
                    msg(5); // fifth
                    $("#ellipsis").hide();
            },ms*3);
        
    }
    
    // this function loads the third set of bot messages in the series
    function thirdBlock(){
        console.log('third block ...');
        
        showEllipsis();
           
        setTimeout(
                function(){msg(6); // sixth message
            },ms);
        
        setTimeout(
                function(){
                    msg(7); // seventh
            },ms*2);
        
        setTimeout(
                function(){
                    msg(8); // eighth
                    $("#ellipsis").hide();
            },ms*3);
        
    }
    
    // this function loads the third set of bot messages in the series
    function fourthBlock(){
        console.log('fourth block ...');
        
        showEllipsis();
           
        setTimeout(
                function(){msg(9); // ninth message
            },ms);
        
        setTimeout(
                function(){
                    msg(10); // tenth
            },ms*2);
        
        setTimeout(
                function(){
                    msg(11); // eleventh
                },ms*3);
        
        setTimeout(
                function(){
                    msg(12); // twelfth
                    $("#ellipsis").hide();
            },ms*4);
    }
    
     function fifthBlock(){
        console.log('fifth block ...');
        
        showEllipsis();
           
        setTimeout(
                function(){msg(13); // thirteenth message
                $("#ellipsis").hide();
            },ms);
     }
    
    // function to load next message
    function msg(num){
        
        $("#"+num).appendTo("#messages");
        
        showEllipsis();
        
        $("#"+num).show();
        
        $('#messages').stop().animate({
            scrollTop: $('#messages')[0].scrollHeight
        }, "fast");
        
        console.log($('#messages')[0].scrollHeight);

    }
    
    // function to show ellipsis
    
    function showEllipsis(){
        $("#ellipsis").show().appendTo('#messages');
        
    }
    
    // when user hits "Enter" run the submitComment function    
    
    $("#textbox").keypress(function (e) {
        if (e.keyCode != 13) return;
        var txt = $("#textbox").val().replace(/\n/g, "");
        
        if (e.keyCode == 13){
            submitComment();
        }
        
        return false;
        
    });
    
   
    // this function posts a new comment to the page and triggers the correct block to load
    function submitComment(){
        i++; // increment "i" by +1
        
        // append a new container with thumbnail, etc.
        $("<div>",{class:"msg user",id:"u"+i}).appendTo("#messages");
        $("<div>",{class:"purple"}).appendTo("#u"+i);
        $("<img>",{class:"right", src:"images/cleo.jpg"}).appendTo("#u"+i+ " .purple");
        $("<div>",{style:"clear:both"}).appendTo("#u"+i);
        
        // get the text typed into the input box
        var txt = $("#textbox").val();
        
        // append the typed text into the new post
        $( "#u"+i ).append( txt );
        
        $("#textbox").val("");
        $('#messages').stop().animate({
            scrollTop: $('#messages')[0].scrollHeight
        }, "fast");
        
        console.log($('#messages')[0].scrollHeight);
        
        checkNext();
    }

    // check what block to send out next
    function checkNext(){
        
        //how many User messages are visible? 
        var msgcount = $(".user:visible").length;
        console.log(msgcount);

        if(msgcount == 1){ // if one
            secondBlock();
        } else if(msgcount == 2){ // if two
            thirdBlock();
        } else if (msgcount == 3){ // if three
            fourthBlock();
        } else if (msgcount == 4){
            fifthBlock();
        }
    }
});