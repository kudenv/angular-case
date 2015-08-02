(function(){

    'use strict'
    angular
        .module('app.profile')
        .service('categoriesService',categoriesService);

    categoriesService.$inject = ['$http'];
    function categoriesService($http) {

        var URLS = {
            FETCH: 'app/profile/data/categories.json'
        }
        var categories,
            currentCategory;
        /*
        * Interface
        */
        var service = {

            getCurrentCategory:getCurrentCategory,
            getCategories:getCategories,
            getCurrentCategoryName:getCurrentCategoryName,
            setCurrentCategory:setCurrentCategory,
            getCategoryByName:getCategoryByName

        }

         return service;
        /*
         * Interface implementation
         */
        function extract(result) {
            return result.data;
        }

        function cacheCategories(result) {
            categories = extract(result);
            return categories;
        }

        function getCategories(){
            return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
        }
        function getCurrentCategory(){
            return currentCategory;
        }

        function getCurrentCategoryName(){
            return currentCategory ? currentCategory.name : '';
        }
        function setCurrentCategory(category){
                currentCategory = category;
            return currentCategory;

        }
        function getCategoryByName(){}

    }
})()
