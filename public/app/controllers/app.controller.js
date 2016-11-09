(function () {
    "use strict";

    angular
        .module('app')
        .controller('AppController', [AppController]);


    function AppController(){

        var app = this;

        app.title = "We're Gonna Need A Bigger Note...";
    }
}());