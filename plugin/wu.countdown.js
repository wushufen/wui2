$(function(){
	/**
	* 要求jquery
	* .wuijs-countdown{到期时间戳（毫秒）}
	* 精确到毫秒
	*/
	var interval = 1000;//更新周期毫秒
	//遍历.wuijs-countdown
	$('.wuijs-countdown').each(function(){

		var show = this;//指代

		//目标时间戳毫秒
		var targetMs = $(show).html();

		//周期更新
		setInterval( function(){

			//现在时间戳毫秒 差值
			var diff = targetMs - new Date().getTime();

			//输出内容
			var showText = "";

			//是否已过期
			if (diff<0) {showText = "已过期";}
			else{

				//计算
				var Dms = 1000*60*60*24;//一天毫秒数
				var Hms = 1000*60*60;//一小时毫秒数
				var Mms = 1000*60;//一分钟毫秒数
				var Sms = 1000;//一秒毫秒数

				//天
				var D = Math.floor(diff/Dms);
				if (D>0) {showText += D + "天"};

				diff -= D*Dms;//计算天数后剩余毫秒数

				//时
				var H = Math.floor(diff/Hms);
				if (D>0||H>0) {showText += H + "时"};

				diff -= H*Hms;//计算小时后剩余毫秒数

				//分
				var M = Math.floor(diff/Mms);
				if (D>0||H>0||M>0) {showText += M + "分"};

				diff -= M*Mms;//计算分钟后剩余毫秒数

				//秒
				var S = Math.floor(diff/Sms);
				if (D>0||H>0||M>0||S>0) {showText += S + "秒"};

				diff -= S*Sms;//计算秒数后剩余毫秒数

				//毫秒
				var MS = Math.floor(diff/10);
				if ((D>0||H>0||M>0||S>0)&&interval<1000) {showText += MS + ""};

			}

			//显示
			$(show).html(showText);

		}, interval);

	});
});