(function(){
    'use strict'

    angular
        .module('profile.categories.page',[])
        .config(config)
        .controller('profileBookmarkController',profileBookmarkController);

    config.$inject = ['$stateProvider'];

    function config($stateProvider){
           $stateProvider
               .state('index.profile.bookmarks',{
                   url:'/profile/settings/:category/:narrow',
                   views:{
                       'bookmarks@index.profile':{
                           controller:'profileBookmarkController',
                           //templateUrl:'app/profile/categories-page/category-one.tml.html'
                           templateUrl:function($stateParams){
                               var narrow = $stateParams.narrow;
                               var template = 'app/profile/categories-page/category-'+narrow+'.tml.html'
                               console.log(narrow);
                               return  template;
                           }
                       }
                   }
               })
    }

    profileBookmarkController.$inject = ['categoriesService'];

    function profileBookmarkController(categoriesService){
        var vm = this;
        vm.categories = [];

        activate();
        function activate(){


        };

    }
})()
