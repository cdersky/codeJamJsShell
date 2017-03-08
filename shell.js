var str = ''
var res ='';
var caseCounter = 1;

process.stdin.on('data', function(chunk) {
    str += chunk.toString();
});

process.stdin.on('end', function() {
  var answer = labels(str);
  process.stdout.write(answer);
});


function labels(str){
  var arr = str.split('\n');
  var noOfCases = arr[0];
  for (var i = 2; i < arr.length; i = i+2) {
    var data = arr[i].split(' ');
    var answer = 'ANSWER';
  };
  
    res += 'Case #' + caseCounter +': \n' + answer + '\n';
    caseCounter++;
  }

  return res;
}
