var args = process.argv
var total = 0;
for (var i = 2; i < args.length; i++) {
  // log the numbers 0 through 9
  total = total+parseInt(args[i],10);
}
console.log(total)