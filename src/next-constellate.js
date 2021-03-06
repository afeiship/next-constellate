(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var CONSTELLATE_STR = '魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯';
  var DATE_ARR = [ 20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22 ];

  nx.constellate = function (inMonth,inDay) {
    return CONSTELLATE_STR.substr(inMonth * 2 - (inDay < DATE_ARR[inMonth - 1]
      ? 2
      : 0), 2);
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.constellate;
  }

}());
