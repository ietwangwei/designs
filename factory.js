// factory.js
page.dom = page.dom || {};
page.dom.Text = function() {
	this.insert = function(where) {
		var text = document.createTextNode(this.url);
		where.appendChild(text);
	};
};

page.dom.link = function() {
		this.insert = function(where) {
			var link = document.createTextNode(this.url);
			where.appendChild(link);
		}
	}
	//使用工厂模式
page.dom.factory = function(type) {
		return new page.dom[type];
	}
	//理解: 就是说做的需求可能各种各样,就在工程里面封装一些小的方法,根据需求去调用函数