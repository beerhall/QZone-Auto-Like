/**
 * 刷新间隔
 */
var INTERVAL = 6000;

/**
 * 点赞并刷新
 */
function like()
{
	/**
	 * 点赞
	 */
	jQuery("a.qz_like_btn_v3[data-clicklog='like']").each(function(index,item){
		console.log(item);
		jQuery(item).trigger('click');
	});
	
	/**
	 * 刷新
	 */
	jQuery("#feed_tab_all").each(function(index,item){
			jQuery(item).trigger('click');
		});
}

/**
 * 以刷新间隔点赞并刷新
 */
setInterval("like()",INTERVAL);