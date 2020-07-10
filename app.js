 // gets a new object (the architecture allows us to not have to use the 'new' keyword here)
 var g = g$('Bhupendra', 'Gupta')

 //use our chainable methods
 g.greet(true).greet().setLanguage('es').greet().log(); //jQuery like chainable methods

 //lets use our object on the click of the login button
$('#login').click(function(){

        // new greetr object and lets pretend we know the who is login
        var loginGreetr = g$('Nick','Fury')

        //hide the div
        $('#logindiv').hide()

        //use the html selectors here to show the message on the html page
        loginGreetr.setLanguage($('#lang').val()).htmlGreeting('#greeting',true).log()

})