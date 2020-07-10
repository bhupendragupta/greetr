(function (global,$){

    var greetr = function(firstName,lastName,language){
        return new greetr.init(firstName,lastName,language)
    }

    greetr.prototype = {

        fullName: function (){
            return this.firstName + ' ' + this.lastName;
        },

        validateLanguage : function (){
            if (supportedLanguages.indexOf(this.language) === -1 )  {
                throw 'Invalid Language';
            }
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!'
        },

        formalGreeting : function () {
            return formalGreetings[this.language] + ' ' + this.fullName();
        },

        greet : function (formal){

            var msg;

            if(formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if(console){
                console.log(msg)
            }

            return this;

        },

        log: function(){
            if(console){
                console.log(logMessages[this.language] + ' ' + this.fullName());
            }
            return this;
        },

        setLanguage: function(lang){

            this.language = lang

            this.validateLanguage();

            return this;
        },

        htmlGreeting : function(selector,formal){
            if(!$){
                throw 'JQuery not loaded'
            }

            if(!selector){
                throw 'Missing jQuery selector!'
            }

            var msg ;

            if(formal){
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            $(selector).html(msg)

            return this;

        }

    }

    var supportedLanguages = ['en','es']

    var greetings  = {
        en : 'Hello',
        es : 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged In..',
        es : 'Inicio sesion..'
    };

    greetr.init = function(firstName,lastName,language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en'

        self.validateLanguage();

    };

    greetr.init.prototype = greetr.prototype;

    global.greetr = global.g$ = greetr;

}(window,jQuery));