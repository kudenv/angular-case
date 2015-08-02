(function(){

    angular
        .module('app.profile',[
            'profile.categories',
            'profile.categories.page'
        ])
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider']

    function config($stateProvider,$urlRouterProvider){

        $stateProvider
            .state('index.profile',{
                url:'/profile/settings',
                //abstract:true,
                views:{
                    "main@index":{
                        templateUrl:'app/profile/profile-page.html',
                        controller:'profileController',
                        controllerAs:'vm'
                    },
                    'categories@index.profile' : {
                        controller: 'profileCategoriesController',
                        templateUrl:'app/profile/categories/categories.tml.html',
                        controllerAs: 'vm'
                    },
                    'bookmarks@index.profile' : {
                        controller:'profileBookmarkController',
                        templateUrl:'app/profile/categories-page/categories-page.tml.html'
                    }
                }
            })

        ;
    };
})()
