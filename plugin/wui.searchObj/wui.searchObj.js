/*获取url的参数*/
+function(win, wu){
	var keyValArr = location.search.slice(1).split('&');
	var searchObj = {};

	for(var i in keyValArr){
		var keyVal = keyValArr[i].split('=');
		searchObj[keyVal[0]] = keyVal[1];
	}
	delete searchObj[''];

	wu.searchObj=searchObj;
}(this, this.wu||(wu={});