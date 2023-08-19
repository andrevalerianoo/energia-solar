$(document).ready(function(){
    

    $('header button').click (function(){
        $('ul').slideDown();
    })

    $('ul').on ("submit", function(e){
        console.log("submit");
        e.preventDefault();
    })





})
