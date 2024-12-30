var moment = require("moment");
var uniq = require("uniq");

var myDate = new Date();
var formatedDate = moment(myDate).format("LLL");

console.log(myDate);
console.log(formatedDate);

var list = [
  1, 2, 5, 1, 2, 5, 1, 2, 2, 1, 1, 1, 2, 2, 2, 1, 3, 4, 5, 4, 5, 8, 4, 5, 6, 4,
  5, 5,
];
var uniqList = uniq(list);

console.log(list);
console.log(uniqList);
