'use strict';

angular
    .module('spapp', ['ui.bootstrap', 'ui.router', 'ngAnimate'])
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
'use strict';

angular.module('spapp')
    .controller('wizardController', ['$q', '$scope', '$state','$window', function ($q, $scope, $state, $window) {

        $scope.data = $scope.data || {};

        //Получим нужный нам стиль верхней кнопки
        $scope.getBtnStyle = function (step) {
            var result = $state.$current.name.indexOf(step) != -1 ? 'btn-primary' : 'btn-default';
            return result;
        };

        //Получим необходимость отключения соответствующего контрола
        $scope.getDisabled = function (forStep) {
            if (forStep == 'step1') return false;
            switch ($state.$current.name)
            {
                case 'wizard.step1':
                    if (forStep == 'step3')  return true;
                    else return $scope.wizardForm.firstName.$invalid || $scope.wizardForm.lastName.$invalid;
                    break;
                case 'wizard.step2':
                    return $scope.wizardForm.companyName.$invalid || $scope.wizardForm.companyAddress.$invalid;
                    break;
                case 'wizard.step3':
                    var result = $scope.wizardForm.companyName.$invalid || $scope.wizardForm.companyAddress.$invalid || $scope.wizardForm.firstName.$invalid || $scope.wizardForm.lastName.$invalid;
                    console.log(result);
                    return result;
                    break;
            }
        };

        //Сохраним в шарик
        $scope.saveToSharePoint = function () {
            SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
                saveData($scope.data, 'testList').then(function (data) {
                    $window.location.href = _spPageContextInfo.webAbsoluteUrl + '/Pages/listView.aspx';
                });
            });
        };

        //Пример использования промиса - в таком виде можно выносить, например, в сервис
        function saveData(data, listName) {
            var def = $q.defer();
            var clientContext = new SP.ClientContext(_spPageContextInfo.webAbsoluteUrl);
            var oList = clientContext.get_web().get_lists().getByTitle(listName);
            var itemCreateInfo = new SP.ListItemCreationInformation();
            var oListItem = oList.addItem(itemCreateInfo);

            for (var prop in $scope.data) {
                oListItem.set_item(prop, data[prop]);
            }
            oListItem.update();
            clientContext.load(oListItem);
            clientContext.executeQueryAsync(ok, notok);
            function ok(data) {
                def.resolve(data);
            };
            function notok(data) {
                def.reject(data);
            };
            return def.promise;
        }

    }]);