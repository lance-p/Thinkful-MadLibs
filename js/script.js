var app = angular.module('app', []);
app.controller("MadLibsController", MadLibsController);

function MadLibsController($scope) {
  $scope.male_name = '{{male name}}';
  $scope.job_title = '{{job_title}}';
  $scope.female_name = '{{female_name}}';
  $scope.tedious_task = '{{tedious_task}}';
  $scope.useless_skill = '{{ useless_skill }}';
  $scope.alias_name = '{{robot_name}';
  $scope.times_faster = '{{times_faster}';
}
MadLibsController.$inject = ['$scope'];
//clear input on focus
var input = document.querySelectorAll("input");
for (var i = 0; i < input.length; i++) {
  console.log(input[i]);
  var ele = input[i];
  ele.onfocus = delegate(ele, window.clearInput);
}

function delegate(obj, handler) {
  return function () {
    handler.call(obj);
  }
}

function clearInput() {
  //console.log('zzzzzzzz' + this.value);
  this.value = '';
}