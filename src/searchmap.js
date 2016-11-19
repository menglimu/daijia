//require("http://api.map.baidu.com/api?v=2.0&ak=l4aUB0y5tI5bFfGbZUScijxkR26mMzI1")
var map = new AMap.Map("l-map");
//map.centerAndZoom("阆中",12);
map.setCity("阆中");
export default {
	//定位
	location(onComplete){
		var geolocation
		map.plugin(['AMap.Geolocation','AMap.Geocoder'], function() {
				geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition:'RB'
      });
//      map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', (data)=>{
		        console.log(new Date());
        	new AMap.Geocoder({batch:false}).getAddress(data.position,(status,result)=>{
//      		alert(result.regeocode.formattedAddress)
						if(status=="complete"&&result.info=='OK'){
							onComplete(result.regeocode.formattedAddress)
						}else{
							onComplete(false)
						}
        	})
//		        console.log(data)
		    });//返回定位信息
        AMap.event.addListener(geolocation, 'error', (data)=>{
        	onComplete(false)
        });      //返回定位出错信息
   	});
	},
	//关键字搜索
	search(word,callback) {
//	var options = {
//		onSearchComplete: function(results){
//			// 判断状态是否正确
//			if (local.getStatus() == BMAP_STATUS_SUCCESS){
//				var s = [];
//				for (var i = 0; i < results.getCurrentNumPois(); i ++){
//					s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
//				}
////				document.getElementById("r-result").innerHTML = s.join("<br/>");
//				console.log(s);
//				console.log(results);
//			}
//		}
//	};
//	var local = new BMap.LocalSearch(map, options);
//	local.search(word);
	map.plugin(["AMap.PlaceSearch"], function() {
		var placeSearchOptions = { //构造地点查询类
	        pageSize: 5,
	        pageIndex: 1,
	        city: "0817" //城市
	    };
	    var placeSearch = new AMap.PlaceSearch(placeSearchOptions);
	    //关键字查询，您如果想修改结果展现效果，请参考页面：http://lbs.amap.com/fn/css-style/
	    placeSearch.search(word, function (status, result) {
	        if (status === 'complete' && result.info === 'OK') {
	//          console.log(status);
	//          console.log(result);
						callback(result);
	        }
	    });
	})
		 
//  var placeSearchRender=new Lib.AMap.PlaceSearchRender();
    
	}
}

