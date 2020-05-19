'use strict';

eventsApp.controller('EditEventController', 
    function EditEventController($scope) {
        
        $scope.saveEvent = function(event, newEventform) {
            if(newEventform.$valid) {
                window.alert('event ' + event.name + ' saved');
            }
        }

        $scope.cancelEdit = function() {
            window.location = "/EventDetails.html";
        }
    }
);