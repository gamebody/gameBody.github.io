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

var otheme = document.getElementById('theme');
otheme.addEventListener('click', function(){
	var stats = this.getAttribute('class').split(' ')[1];
	if (stats === 'btn-left') {
		otheme.setAttribute('class', 'btn btn-right');
		exLight();
		othemeTitle.innerHTML = 'Light';
	}else {
		removeLink();
		othemeTitle.innerHTML = 'Dark';
		otheme.setAttribute('class', 'btn btn-left');
	}
	console.log(1)
})
var olink = document.createElement('link');
var othemeTitle = document.getElementById('themeTitle');
olink.rel="stylesheet";
olink.type="text/css";
olink.href="./css/light.css";
function exLight () {
	document.getElementsByTagName('head')[0].appendChild(olink);
}
function removeLink() {
	document.getElementsByTagName('head')[0].removeChild(olink);
}
$(function(){
	$("#slider_img").owlCarousel({
		items: 1,
		loop: true,
		autoPlay: 2000,
		stopOnHover: true,
		responsive: false
	});
})


