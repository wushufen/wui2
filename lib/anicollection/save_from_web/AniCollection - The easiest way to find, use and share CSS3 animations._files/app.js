(function(){
  // module initialization
  angular.module('AniCollection', [
    'ngRoute',
    'LocalStorageModule',
    'collection',
  ]).

  // routes config
  config(function($routeProvider,localStorageServiceProvider) {
    $routeProvider.
      when('/',
        {
          templateUrl: "public/modules/collection/index.html"
          //controller: "collectionController"
        }
      ).
      when("/:category/:id",
        {
          templateUrl: "public/modules/collection/templates/animation_detail.html",
          controller: "detailController"
        }
      ).
      otherwise({redirectTo: '/'});

    localStorageServiceProvider
      .setPrefix('anicollection');
    });
})();
