/**
 * 移除Jquery
 * 
 * 自己实现一些JQ功能
 */
var JQ={};
/**
 * 距离根元素html的顶部距离
 * display:none元素offsetTop为0|相对父元素的距离
 * 
 * @param curEle
 */
JQ.offset=function(curEle){
	var totalLeft = null,totalTop = null,par = curEle.offsetParent;
	//首先把自己本身的进行累加
	totalLeft += curEle.offsetLeft;
	totalTop += curEle.offsetTop;
	//只要没有找到body，我们就把父级参照物的边框和偏移量累加
	while(par){
		if(navigator.userAgent.indexOf("MSIE 8.0") === -1){
			//不是标准的ie8浏览器，才进行边框累加
			//累加父级参照物边框
			totalLeft += par.clientLeft;
			totalTop += par.clientTop;
		}
		//累加父级参照物本身的偏移
		totalLeft += par.offsetLeft;
		totalTop += par.offsetTop;
		par = par.offsetParent;
	}
	return {left:totalLeft,top:totalTop};
}
/**
 * window.onload必须等到页面内包括图片的所有元素加载完毕后才能执行。 
 * $(document).ready()是DOM结构绘制完毕后就执行，不必等到加载完毕。
 * 
 * $(document).ready(function(){	})
 * window.onload=()=>{};
 * 
 */
JQ.onReady=null;
JQ.ready=function(func){
	var olds=this.onReady;
	if(typeof olds!='function'){
		//还没有设置
		this.onReady=func;
	}else{
		//已设置
		this.onReady=function(){
		   olds();//执行旧事件处理器
		   func();//插入新的事件处理器
		}
	}
};
/**
 * 触发事件
 */
JQ.emitReady=function(){
	this.onReady();//执行函数
};
/**
 * 等到页面内包括图片的所有元素加载完毕后才能执行
 */
JQ.onload=function(func){
	var olds=window.onload;
	if(typeof olds!='function'){
		//还没有设置
		window.onload=func;
	}else{
		//已设置
		window.onload=function(){
		   olds();//执行旧事件处理器
		   func();//插入新的事件处理器
		}
	}
}
//
//window.JQ=JQ;
