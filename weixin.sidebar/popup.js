
var Popup={};

var btn=document.getElementById('btn');
//按钮状态
weixinSidebar.getOn(function(on){
	if(on && on>''){ btn.className='on'; }
	//绑定事件
	btn.onclick=function(){
		var btn=this;
		if(on && on>''){
			//已开启|关闭
			on='';
			btn.className='';
		}else{
			//已关闭|开启
			on='1';
			btn.className='on';
		}
		//保存
		weixinSidebar.setOn(on);
	};
});
