var app = angular.module('app', []);

var input = document.querySelectorAll("input");
for(var i=0; i< input.length;i++)
{
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
  this.value='';
}