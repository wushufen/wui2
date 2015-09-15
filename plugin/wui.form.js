// js 创建表单提交
/**
wui.form({
	url: url,
	method: 'post',
	data: {
		name: 'tom',
		password: 'pass'
	}
}).submit();
*/
+function(wui){
	wui.form = function(options){
		var options = options||{};

		var form = document.createElement('form');
		form.style.display = 'none';
		form.action = options.action||options.url||'';
		form.method = options.method||'post';

		var data = options.data;
		for(var i in data){
			var field = document.createElement('input');
			// field.type = 'hidden';
			field.name = i;
			field.value = data[i];

			form.appendChild(field);
		}

		document.body.appendChild(form);//ie要加到页面上才能提交
		return form;
	};
}( this.wui||(wui={}) );