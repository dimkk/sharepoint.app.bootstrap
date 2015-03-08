'use strict';

angular
    .module('spapp', ['ui.router', 'ngAnimate'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('wizard', {
                url: '/wizard',
                templateUrl: '../Scripts/src/views/wizard.html',
                controller: 'wizardController'
            })
            .state('wizard.step1', {
                url: '/step1',
                templateUrl: '../Scripts/src/views/wizardStep1.html'
            })
            .state('wizard.step2', {
                url: '/step2',
                templateUrl: '../Scripts/src/views/wizardStep2.html'
            })
            .state('wizard.step3', {
                url: '/step3',
                templateUrl: '../Scripts/src/views/wizardStep3.html'
            });
        $urlRouterProvider.otherwise('/wizard/step1');
    });