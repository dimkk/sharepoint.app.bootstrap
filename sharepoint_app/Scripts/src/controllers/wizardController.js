﻿'use strict';

angular.module('spapp')
    .controller('wizardController', ['$q', '$scope', '$state','$window', function ($q, $scope, $state, $window) {

        $scope.data = $scope.data || {}; //Сохраним значения полей при переходах

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
                    if (forStep == 'step3')  return true; //в слуаче если мы находися на первом шаге, а рендерим контрол для перехода не третий - всегда true, т.е. отключен
                    else return $scope.wizardForm.firstName.$invalid || $scope.wizardForm.lastName.$invalid;
                    break;
                case 'wizard.step2':
                    return $scope.wizardForm.companyName.$invalid || $scope.wizardForm.companyAddress.$invalid;
                    break;
                case 'wizard.step3':
                    return $scope.wizardForm.companyName.$invalid || $scope.wizardForm.companyAddress.$invalid || $scope.wizardForm.firstName.$invalid || $scope.wizardForm.lastName.$invalid;
                    break;
            }
        };

        //Сохраним в шарик
        $scope.saveToSharePoint = function () {
            SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
                if ($scope.wizardForm.$valid) {
                    saveData($scope.data, 'testList').then(function (data) {
                        $window.location.href = _spPageContextInfo.webAbsoluteUrl + '/Pages/listView.aspx';
                    });
                }
            });
        };

        //Пример c использованием промиса - в таком виде можно выносить, например, в сервис
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