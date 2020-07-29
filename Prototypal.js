  
  var Name = function (name) {
    let obj = Object.create(method); //Object.create 사용
    obj.name = name;
    return obj;
  };
  
  var method = {
    introduce: function () {
      console.log(`안녕하세요 ${this.name}입니다.`);
    },
  };
  var name1 = Name("JUN");
  
  name1.introduce(); //안녕하세요 JUN입니다.