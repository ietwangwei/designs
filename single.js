//系统间各种模式的通信协调上,单例模式
var mySingleTon = function() {
	var a;
	if (a) {
		a = a;
	} else {
		a = function() {
			console.log('hahaha');
		}
	}
	return a
}