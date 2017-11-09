//观察者模式又叫发布订阅模式（Publish/Subscribe），它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。
function Observer() {
	this.fns = [];
};

Observer.prototype = {
	subscribe: function(fn) {
		debugger;
		this.fns.push(fn);
	},
	unSubcribe: function(fn) {
		this.fns = this.fns.filter(function(el) {
			if (el !== fn) {
				return el;
			}
		});
	},
	update: function(o, thisObj) {
		debugger;
		var scope = thisObj || window;
		this.fns.forEach(function(el) {
			el.call(scope, o);
		})
	}
};

var o = new Observer();
var f1 = function(data) {
	console.log('viv' + data + '吃饭了');
};
o.subscribe(f1);
o.update("赶紧滚犊子!");

//理解:当一个对象的改变需要同时改变其它对象，并且它不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。