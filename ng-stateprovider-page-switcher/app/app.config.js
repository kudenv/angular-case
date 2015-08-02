(function(){
    'use strict'

    angular
        .module('app')
        .config(config);



    config.$inject = ['$urlRouterProvider','$stateProvider'];


        $stateProvider
            .state('index',{
                url:'',
                abstract:true,
                views:{
                    '@':{templateUrl:'view/layout.html'},
                    'header@index':{templateUrl:'view/template/header.html'},
                    'breadcrumbs@index':{templateUrl:'view/template/breadcrumbs.html'},
                    'main@index':{templateUrl:'view/template/main.html'},
                    'footer@index':{templateUrl:'view/template/footer.html'}
                }
            })
            .state('index.home',{
                url:'/',
                views:{
		//set other template if nedded 
                    'main@index':{templateUrl:'view/template/main.html'}
                }
            })
            $urlRouterProvider
                .when("/","index.home")
                .otherwise ('/');

        $locationProvider.html5Mode().requireBase = false;

        $httpProvider.defaults.useXDomain = true;


    }

})()

