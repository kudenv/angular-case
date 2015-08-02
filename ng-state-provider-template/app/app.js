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
                          '@':{templateUrl:'template/layout.html'},
                          'top@index':{templateUrl:'template/top.html'},
                           'middle@index':{templateUrl:'template/middle.html' },
                          'footer@index':{templateUrl:'template/footer.html'}
                      }
                  })

                  .state('index.home',{
                      url:"/",
                      views:{
                          'middle@index' :{templateUrl:'template/employee.html'}
                      }
                  })
                  .state('index.main',{
                      url:"/main",
                      parent:'index',
                      views:{
                          'middle@index' :{templateUrl:'template/middle.html'}
                      }
                  })

                  .state('index.login',{
                      url:'/login',
                      parent:'index',
                      templateUrl:'template/login.html'
//                      views:{
//                          '@index':{templateUrl:'login.html'},
//                          'form1@index.login':{ templateUrl:'form.html'}
//                      }

                  })
                  .state('index.login.form',{
                      views:{
                          '@index.login':{
                              templateUrl:'template/form.html'
                          }
                      }
                  })

                  .state('index.employee',{
                      url:'/employee',
                      views:{
                          'middle@index':{templateUrl:'template/employee.html'}
                      }


                  })

        ;
        $urlRouterProvider
            .when('/' , 'index.employee')
            .otherwise('/')
    }

})()
