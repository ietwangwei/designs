//构造函数 使用原型属性 prototype 来实现
var Car = function(name, price) {
	if (!this instanceof Car) {
		//判断如果是不通过new操作符实例的,返回操作实例
		return new Car(name, price);
	}
	this.name = name;
	this.price = price;
};

Car.prototype.sell = function() {
	return console.log(this.name + "售价" + this.price);
}

var myCar = new Car("本田", "20W");
myCar.sell();

//在prototype原型上面添加的方法,只被实例化一次,被所有继承者使用