(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.constellation = function (month,day) {
  var s = "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯";
  var arr = [
    20,
    19,
    21,
    21,
    21,
    22,
    23,
    23,
    23,
    23,
    22,
    22
  ];
  return s.substr(month * 2 - (day < arr[month - 1]
    ? 2
    : 0), 2);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.constellation;
  }

}());
