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



// var Name = function(name) {
//     var obj = {};
//     obj.name = name;
//     obj.greet = function() {
//         console.log(('hello, ${this.name}');
//     }
//     return obj;
// }
// var name1 = Name('JUN');
// var name2 = Name('HYUN');

/*
// Functional Shared 방식
// extend 함수
var extend = function(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
};


// 2) 메소드 담을 객체 생성
var Method = {};
Method.greet = function() {
    console.log('hello, ${this.name}');
};

// 1) Name 함수 선언
var Name = function(name) {
    var Instance = {
        name: name,
    };
        extend(Instance, Method)
        return Instance
};

var name1 = Name('JUN');
var name2 = Name('hyun');
*/
