# MarkDown语法说明

## 标题

1. "#"  一级标题
2. "##" 二级标题
3. "###" 三级标题
……

## 列表

- 无序列表1
- 无序列表2
- 无序列表3 

* 无序列表1
* 无序列表2
* 无序列表3 

a. 有序列表1
b. 有序列表2
c. 有序列表3 

> 这里是引用： 无序列表使用  - 或 * ，有序列表使用1. first 2. second


## 图片与链接

### 插入链接
> 插入链接 [Baidu][www.baidu.com]
[Baidu][www.baidu.com]

###插入图片
> 插入图片 ![测试图片]{http://ww2.sinaimg.cn/large/6aee7dbbgw1efffa67voyj20ix0ctq3n.jpg}
![测试图片]{http://ww2.sinaimg.cn/large/6aee7dbbgw1efffa67voyj20ix0ctq3n.jpg}


## 粗体与斜体

> 粗体 : *这里是粗体*

*这里是粗体*

> 斜体： *这里是斜体

*这里是斜体


## 代码框

> 用 2个 ` 把代码包括起来

`
/*
 * @description Dom列表中，点击某一列表项，该列表项样式突出（改变），其它列表项正常显示
 * @param {Number} index 待突出的列表项 
 * @param {String} select 列表项选择器
 * @param {String} classi 突出列表项的样式表(class类)
 */
base.setActive = function(index, select, classi) {
	$(select).each(function(i){
		if(i === index) {
			$(this).addClass(classi);
		}else {
			$(this).removeClass(classi);
		}
	});
}
`

## 分割线

> 3个 *

***


