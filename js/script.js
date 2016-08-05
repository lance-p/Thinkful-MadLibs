var app = angular.module('app', []);
app.controller("MadLibsController", MadLibsController);

function MadLibsController() {
  var vm1 = this;
  vm1.male_name = '{{male name}}';
  vm1.job_title = '{{job_title}}';
  vm1.female_name = '{{female_name}}';
  vm1.tedious_task = '{{tedious_task}}';
  vm1.useless_skill = '{{ useless_skill }}';
  vm1.robot_name = '{{robot_name}';
  vm1.times_faster = '{{times_faster}';
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