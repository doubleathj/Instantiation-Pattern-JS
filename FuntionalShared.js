var extend = function (to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
};

var Name = function (name) {
  let obj = {};
  obj.name = name;
  extend(obj, method);
  return obj;
};

var method = {
  introduce: function () {
    console.log(`안녕하세요 ${this.name}입니다.`);
  },
};
var name1 = Name("JUN");

name1.introduce(); //안녕하세요 JUN입니다.
