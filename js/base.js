/*
 * =======================================================================
 * @description 基本函数
 * @author luoxue
 * @time 20151027
 * =======================================================================
 */

var base = (function(base,undefined){
	
	/*
	 * @description 深拷贝
	 * @param {Object/String/Number/Boolean/Undefined} obj 待深拷贝的对象
	 */
	base.deepCopy = function(obj) {
		var deepObj;
		if(typeof obj === null || typeof obj === undefined || typeof obj !== 'object') {
			//obj为非对象的情况
			deepObj = obj;
		}else if(Object.prototype.toString.call(obj1) === '[Object Array]') {
			//obj为数组的情况
			deepObj = [];
			for(p in obj) {
				deepObj.push(base.deepCopy(obj[p]));
			}
		}else {
			//obj为对象的情况
			deepObj = {};
			for(p in obj) {
				deepObj[p] = base.deepCopy(obj[p]);
			}
		}
		return deepObj;
	};
	
	
	/* ===============================================================================
	 * @description Dom操作相关js
	 ===============================================================================*/
	
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
	
	
	//原生js添加事件处理程序
	base.bindEvent(obj, event, fn) {
		if(obj.addEventListener){
            obj.addEventListener(event, fn, false);
        }else{
            var _fn = fn;
			fn = function() {
				_fn.call(obj);
			}
           obj.attachEvent('on' + event, fn);
           return fn;
        }
	}
	
	//移除事件处理程序， 注意：移除的是base.bindEvent返回的句柄
	base.unBindEvent(obj, event, fn) {
		if(obj.removeEventListener) {
			obj.removeEventListener(event, fn, false);
		}else {
			obj.detachEvent('on' + event, fn);
		}
	}
})(base);
