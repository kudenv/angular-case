(function(){
    'use strict'

    angular
        .module('profile.categories',[])
        .config(config)
        .controller('profileCategoriesController',profileCategoriesController);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider,$urlRouterProvider){
        //to do stub
    }
    profileCategoriesController.$inject = ['categoriesService']

    function profileCategoriesController(categoriesService){
        var vm = this;

        vm.categories;
        vm.isCurrentCategory = isCurrentCategory;
        vm.getCurrentCategoryName = categoriesService.getCurrentCategoryName;
        activate();
        function activate(){
            categoriesService.getCategories()
                .then(function(result){
                    vm.categories = result;
                })
        };

        function isCurrentCategory(category) {
            return category.name ===  vm.getCurrentCategoryName()
        }

    }
})()
