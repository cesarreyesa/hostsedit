
angular.module('editApp', [])
  .controller('EditController', function() {
    var edit = this;
    var hostile = require('hostile')
    edit.lines = []
    var lines = hostile.get(false);
    lines.forEach(function (line) {
      edit.lines.push(line);
    })
    console.log(edit.lines);
  });
