
###兼容性处理

** rgba中透明值和 filter数值转换 **
http://img2.tuicool.com/iEvEVr.png

** 背景2半透明兼容性 **
{
	opacity: 0.5; 
	-moz-opacity: 0.5;
	fliter: alpha(opacity=50);
} 

** display: inline-block **
{
	display: inline-block;
	*display: inline;
	*zoom: 1;
}

** css Hack **
- 所有浏览器 通用 height: 100px; 
- IE6 专用 _height: 100px; 
- IE7 专用 *+height: 100px; 
- IE6、IE7 共用 *height: 100px; 
- IE7、FF 共用 height: 100px !important; 

** 清除浮动 **
.clear {
	*zoom: 1;
}
.clear-float: after{
	content: "";
	display: table;
	clear: both;
}

** IE6，浮动元素产生双倍间距 **
{
	width: 100px;
	float: left;
	margi-left: 50px;
	*display: inline; /*出去双倍距离*/
}

** IF 条件 Hack **
> gt = Great Then 大于 ; > = > 大于号 ; lt = Less Then 小于 ; < = < 小于号 ; gte = Great Then or Equal 大于或等于;  lte = Less Then or Equal 小于或等于; 

1. <!--[if !IE]><!--> 除IE外都可识别 <!--<![endif]--> 
2. <!--[if IE]> 所有的IE可识别 <![endif]--> 
3. <!--[if IE 5.0]> 只有IE5.0可以识别 <![endif]--> 
4. <!--[if IE 5]> 仅IE5.0与IE5.5可以识别 <![endif]--> 
5. <!--[if gt IE 5.0]> IE5.0以及IE5.0以上版本都可以识别 <![endif]--> 
6. <!--[if IE 6]> 仅IE6可识别 <![endif]--> 
7. <!--[if lt IE 6]> IE6以及IE6以下版本可识别 <![endif]--> 
8. <!--[if gte IE 6]> IE6以及IE6以上版本可识别 <![endif]--> 
9. <!--[if IE 7]> 仅IE7可识别 <![endif]--> 
10. <!--[if lt IE 7]> IE7以及IE7以下版本可识别 <![endif]--> 
11. <!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->


