$(document).ready(function() {
    $("#normal").keyup(function () {
        let words = $("#normal").val();
        words = words.replace(/hello/gi, "ahoy");
        
        $("#pirate").val(words);
    });

});