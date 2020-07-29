var Name = function(name) {
    this.name = name;
}

Name.prototype.introduce = function() {
    console.log(`안녕하세요 ${this.name}입니다.`)
};

var name1 = new Name("JUN");

name1.introduce(); //안녕하세요 JUN입니다.