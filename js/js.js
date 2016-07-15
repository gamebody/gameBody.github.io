var logMessage = '我叫liuyun o(∩_∩)o 基础技能:html、css、javascript、ps、Axure 了解的一些框架:React、jQuery、Vue 使用的工具:webpack、gulp、npm、git、sublime 喜欢：game、code、design';
var eleShowLog = document.getElementById('logContent');
var run = document.getElementById('runBtn');

var typeWrite = {
	getMsg: function(msg) {
		if (!this.msg) {
			this.msg = '';
		}
		this.msg = msg;
	},
	poiter: 0,
	speed: 100,
	type: function() {
		var _this = this;
		eleShowLog.innerHTML += this.msg.slice(this.poiter, this.poiter + 1);
		var _index = eleShowLog.innerHTML.length;
		//console.log(_index + '---' + eleShowLog.innerHTML.charAt(_index-1))
		if (eleShowLog.innerHTML.charAt(_index - 1) === ' ') {
			eleShowLog.innerHTML = eleShowLog.innerHTML + '<br/>';
		}
		if (this.msg.length === this.poiter) {
			clearTimeout(timer);
			this.destroy();
		}else {
			this.poiter++;
			var timer = setTimeout(function(){
				_this.type();
			}, _this.speed);
		}
	},
	init: function(msg){
		if (eleShowLog.innerHTML !== '') {
			eleShowLog.innerHTML = '';
			this.poiter = 0;
			this.msg = '';
		}
		this.getMsg(msg);
		this.type();
	},
	destroy: function() {
		this.poiter = 0;
		this.msg = '';
		run.style.backgroundColor = '#546e7a';
		run.style.color = '#fffefe';
	}
}
run.addEventListener('click', function(){
	typeWrite.init(logMessage);
	run.style.backgroundColor = '#253036';
	run.style.color = '#536974';
})

function Circle (config) {
	this.posX = config.x;
	this.posY = config.y;
	this.width = config.width;
	this.limitX = (document.clientWidth * 0.9) - this.width/2;
	this.content = config.content;
	this.bgc = config.backgroundColor;
}
Circle.prototype = {
	init: function(){
		var oidv = document.createElement('div');
		odiv.style.width = this.width + 'px';
		odiv.style.height = this.height + 'px';
		if(!this.posCenter) {
			this.posCenter = '';
		}
		odiv.style.backgroundColor = this.bgc;
		odiv.innerHTML = this.content;
		odiv.style.fontSize = '14px';
		odiv.style.color = '#fdfdfd';
	}
}

/* js轮播图 */
var oslider = document.getElementById('slider_img');
var loop = {
	index : 1,
	init: function(ele) {
		if (!this.ele) {
			this.ele = null;
		}
		this.ele = ele;
		this.run();
	},
	speed: 2000,
	runningSpeed: 10,
	run: function() {
		var _this = this;
		var timer = setInterval(function(){
			_this.ele.style.left = -_this.index * 10 + 'rem';
			_this.index++;
			if (_this.index === 5) {
				_this.ele.style.left = 0;
				_this.index = 1;
			}
		}, this.speed)
	}
}

loop.init(oslider);



