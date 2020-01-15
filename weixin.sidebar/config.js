
var weixinSidebar={};
//
weixinSidebar.key=function(key){ return 'weixin.sidebar'+key; }
//获取配置
weixinSidebar.config=function(key,callback){
	key=this.key(key);
	chrome.storage.local.get([key], function(result) {
		//回调
		if(typeof callback=='function'){
			callback(result[key]);
		}
	});
	return -1;
};
//设置配置
weixinSidebar.setConfig=function(key,value,callback){
	key=this.key(key);
	var storage_data={};storage_data[key]=value;
	chrome.storage.local.set(storage_data, function() {
		//回调
		if(typeof callback=='function'){
			callback(storage_data);
		}
	});
	return -1;
};
weixinSidebar.getOn=function(callback){ return this.config('.on',callback); };
weixinSidebar.setOn=function(on,callback){ return this.setConfig('.on',on,callback); };
