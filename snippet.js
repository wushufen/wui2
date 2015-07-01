// 代码段，|代表光标位置
var snipperMap = {

	// html
	html: '<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <style type="text/css">\n        \n    </style>    \n</head>\n<body>\n\n|\n\n</body>\n</html>',
	a: '<a href="">|</a>',
	img: '<img src="|">',
	input: '<input type="text">',
	script: '<script type="text/javascript">|<\/script>',//？？字符串里的script结束标签/要转义？？
	link: '<link rel="stylesheet" type="text/css" href="">',
	
	// css
	mg: 'margin: ',
	bd: 'border: ',
	pd: 'padding: ',

};