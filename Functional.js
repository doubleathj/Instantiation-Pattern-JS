//Functional 방식

var Name = function (name) {
  var obj = {};

  obj.name = name;
  obj.introduce = function () {
    console.log(`안녕하세요 ${obj.name}입니다.`);
  };
  return obj;
};
var name1 = Name("JUN");

name1.introduce(); //안녕하세요 JUN입니다.


