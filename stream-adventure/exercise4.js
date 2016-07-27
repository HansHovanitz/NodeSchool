  var through = require('through2');
  //through(write, end)
  //since end not given, default of this.push(null) is called. 
  var tr = through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase());
      next();
  });
  process.stdin.pipe(tr).pipe(process.stdout);