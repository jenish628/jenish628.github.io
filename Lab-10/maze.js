$(document).ready(function() {

    let start = false;
    let win = false;



    $('#start').click (function (){
        $('.boundary').removeClass('youlose');
        win = false;
        start = true;
        $('#status').text("Game started...")
		$("div:not(#start, #end)", "div#maze").mouseover(isWin)
		$("#maze").mouseleave(isWin)
    })

    function isWin () {

        if(start) {
            $("div:not(#start, #end)", "#maze").addClass("youlose");
            $("#status").text("Sorry, You Lose!");
            win = true;
        }
    }
    
    $('#end').click (function (){
        
        if (start && !win) {
			$("#status").text("You Win!");
		    start = false;
            win = false;
            $("div:not(#start, #end)", "#maze").removeClass("youlose");
		}
    })



    
})