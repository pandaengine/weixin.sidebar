
//document.body.classList.remove('1111')
//document.body.classList.add('1111')
weixinSidebar.init=function(){
	document.body.classList.add('wxsb-on');//影响css
	var root=document.getElementById('js_mp_sidemenu');
	var current=root.getElementsByClassName('weui-desktop-menu__link_current')[0];	
	var offset=JQ.offset(current);
	var height=document.documentElement.clientHeight
	if(offset.top>height){
		//超出可视范围，滚动到可视范围
		root.scrollTop=offset.top-100;
	}
}
//console.dir('content_scripts');
window.onload=function(){
	//等待js渲染
	setTimeout(function(){
		weixinSidebar.getOn(function(on){
			if(on>''){
				//开启
				weixinSidebar.init();
			}
		});
	},0);
};
