(function(){

    'use strict'

    angular
        .module('app.profile')
        .controller('profileController',profileController)

    profileController.$inject=[]

    function profileController(){

        var vm = this;
        vm.profile = [];

        activate();

        function activate() {

            vm.profile.user = {
                uid:"",
                token:""
            };
        }


    }
})()
