(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var CONSTELLATION_STR = '魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯';
  var DATE_ARR = [ 20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22 ];

  nx.constellation = function (month,day) {
    return CONSTELLATION_STR.substr(month * 2 - (day < DATE_ARR[month - 1]
      ? 2
      : 0), 2);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.constellation;
  }

}());
