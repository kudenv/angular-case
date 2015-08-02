(function(){
    'use strict'
    angular
        .module('app',[
            'ui.router',
        ]).config(config);

        config.$inject = ['$urlRouterProvider','$stateProvider'];

    function config($urlRouterProvider,$stateProvider){
              $stateProvider
                  .state('index',{
                      url:'',
                      abstract:true,
                      views:{
                          '@':{templateUrl:'layout.html'},
                          'top@index':{templateUrl:'top.html'},
                           'middle@index':{templateUrl:'middle.html' },
                          'footer@index':{templateUrl:'footer.html'}
                      }
                  })

                  .state('index.home',{
                      url:"/",
                      views:{
                          'middle@index' :{templateUrl:'employee.html'}
                      }
                  })
                  .state('index.main',{
                      url:"/main",
                      parent:'index',
                      views:{
                          'middle@index' :{templateUrl:'middle.html'}
                      }
                  })

                  .state('index.login',{
                      url:'/login',
                      parent:'index',
                      templateUrl:'login.html'
//                      views:{
//                          '@index':{templateUrl:'login.html'},
//                          'form1@index.login':{ templateUrl:'form.html'}
//                      }

                  })
                  .state('index.login.form',{
                      views:{
                          '@index.login':{
                              templateUrl:'form.html'
                          }
                      }
                  })

                  .state('index.employee',{
                      url:'/employee',
                      views:{
                          'middle@index':{templateUrl:'employee.html'}
                      }


                  })

        ;
        $urlRouterProvider
            .when('/' , 'index.employee')
            .otherwise('/')
    }

})()
