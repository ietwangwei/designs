//使用回调 构建模式
function getCarsById(id, callback) {
	asyncRequest('GET', url, function(result) {
		callback && callback(result);
	})
};

var a = function() {
	this.name = 'viv';
};
var a1 = new a();
console.log(a1.proto === a.prototype)