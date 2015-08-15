
angular.module('editApp', [])
  .controller('EditController', function() {
    var edit = this;
    var hostile = require('hostile')
    edit.lines = []
    var lines = hostile.get(false);
    lines.forEach(function (line) {
      edit.lines.push({ip: line[0], host: line[1]});
    });
    edit.entry = {};
    edit.addRecord = function() {
      if(hostile.set(edit.entry.ip, edit.entry.host)){
        edit.lines.push({ip:edit.entry.ip, host:edit.entry.host});
        edit.entry.ip = '';
        edit.entry.host = '';
      }else{
        console.log("error");
      }
    };
  });
