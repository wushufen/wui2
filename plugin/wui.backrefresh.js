/*
返回时刷新当前页
使用：直接引入即可
wushufen
2014.11.06
*/
+function () {
	var href = location.href;
	var refresh = 'backrefresh';

	// 添加刷新标记
	if ( history.state !== refresh && location.hash !== ('#'+refresh) ) {

		if (history.replaceState) {
			// fix， 使用 replaceState 改变当前的历史
			history.replaceState(refresh, 'title', href);
		}else{
			// 红米note 无效
			location.replace(href + '#' + refresh);
			// 当页面完成后再修改 hash 会生成历史，未完成就修改则不会生成历史，效果同上
			// location.hash = refresh;
		}
	}
	// 刷新、删除刷新标记
	else{

		if (history.replaceState) {
			history.replaceState('refreshed', 'title', href);
		}else{
			location.replace(href);
			// location.hash ='';
		}

		// 刷新
		location.reload();
	}
}();