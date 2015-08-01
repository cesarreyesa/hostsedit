angular.module('editApp', [])
  .controller('EditController', function() {
    var edit = this;
    var fs = require('fs');
    var isWin = /^win/.test(process.platform);
    var path = '';
    if(isWin){
      path = 'C:\\Windows\\System32\\drivers\\etc\\hosts';
    }else{
      path = '/etc/hosts'
    }
    edit.fileText = fs.readFileSync(path, {encoding: 'utf8'});
    console.log(edit.fileText);
//    edit.fileText = fileText;
  });
