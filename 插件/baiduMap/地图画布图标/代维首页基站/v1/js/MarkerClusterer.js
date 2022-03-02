 1 /**
  2  * @fileoverview MarkerClusterer标记聚合器用来解决加载大量点要素到地图上产生覆盖现象的问题，并提高性能。
  3  * 主入口类是<a href="symbols/BMapLib.MarkerClusterer.html">MarkerClusterer</a>，
  4  * 基于Baidu Map API 1.2。
  5  *
  6  * @author Baidu Map Api Group 
  7  * @version 1.2
  8  */
  9   
 10  
 11 /** 
 12  * @namespace BMap的所有library类均放在BMapLib命名空间下
 13  */
 14 var BMapLib = window.BMapLib = BMapLib || {};
 15 (function(){
 16      
 17     /**
 18      * 获取一个扩展的视图范围，把上下左右都扩大一样的像素值。
 19      * @param {Map} map BMap.Map的实例化对象
 20      * @param {BMap.Bounds} bounds BMap.Bounds的实例化对象
 21      * @param {Number} gridSize 要扩大的像素值
 22      *
 23      * @return {BMap.Bounds} 返回扩大后的视图范围。
 24      */
 25     var getExtendedBounds = function(map, bounds, gridSize){
 26         bounds = cutBoundsInRange(bounds);
 27         var pixelNE = map.pointToPixel(bounds.getNorthEast());
 28         var pixelSW = map.pointToPixel(bounds.getSouthWest()); 
 29         pixelNE.x += gridSize;
 30         pixelNE.y -= gridSize;
 31         pixelSW.x -= gridSize;
 32         pixelSW.y += gridSize;
 33         var newNE = map.pixelToPoint(pixelNE);
 34         var newSW = map.pixelToPoint(pixelSW);
 35         return new BMap.Bounds(newSW, newNE);
 36     };
 37  
 38     /**
 39      * 按照百度地图支持的世界范围对bounds进行边界处理
 40      * @param {BMap.Bounds} bounds BMap.Bounds的实例化对象
 41      *
 42      * @return {BMap.Bounds} 返回不越界的视图范围
 43      */
 44     var cutBoundsInRange = function (bounds) {
 45         var maxX = getRange(bounds.getNorthEast().lng, -180, 180);
 46         var minX = getRange(bounds.getSouthWest().lng, -180, 180);
 47         var maxY = getRange(bounds.getNorthEast().lat, -74, 74);
 48         var minY = getRange(bounds.getSouthWest().lat, -74, 74);
 49         return new BMap.Bounds(new BMap.Point(minX, minY), new BMap.Point(maxX, maxY));
 50     }; 
 51  
 52     /**
 53      * 对单个值进行边界处理。
 54      * @param {Number} i 要处理的数值
 55      * @param {Number} min 下边界值
 56      * @param {Number} max 上边界值
 57      * 
 58      * @return {Number} 返回不越界的数值
 59      */
 60     var getRange = function (i, mix, max) {
 61         mix && (i = Math.max(i, mix));
 62         max && (i = Math.min(i, max));
 63         return i;
 64     };
 65  
 66     /**
 67      * 判断给定的对象是否为数组
 68      * @param {Object} source 要测试的对象
 69      *
 70      * @return {Boolean} 如果是数组返回true，否则返回false
 71      */
 72     var isArray = function (source) {
 73         return '[object Array]' === Object.prototype.toString.call(source);
 74     };
 75  
 76     /**
 77      * 返回item在source中的索引位置
 78      * @param {Object} item 要测试的对象
 79      * @param {Array} source 数组
 80      *
 81      * @return {Number} 如果在数组内，返回索引，否则返回-1
 82      */
 83     var indexOf = function(item, source){
 84         var index = -1;
 85         if(isArray(source)){
 86             if (source.indexOf) {
 87                 index = source.indexOf(item);
 88             } else {
 89                 for (var i = 0, m; m = source[i]; i++) {
 90                     if (m === item) {
 91                         index = i;
 92                         break;
 93                     }
 94                 }
 95             }
 96         }        
 97         return index;
 98     };
 99  
100     /**
101      *@exports MarkerClusterer as BMapLib.MarkerClusterer
102      */
103     var MarkerClusterer =  
104         /**
105          * MarkerClusterer
106          * @class 用来解决加载大量点要素到地图上产生覆盖现象的问题，并提高性能
107          * @constructor
108          * @param {Map} map 地图的一个实例。
109          * @param {Json Object} options 可选参数，可选项包括：<br />
110          *    markers {Array<Marker>} 要聚合的标记数组<br />
111          *    girdSize {Number} 聚合计算时网格的像素大小，默认60<br />
112          *    maxZoom {Number} 最大的聚合级别，大于该级别就不进行相应的聚合<br />
113          *    minClusterSize {Number} 最小的聚合数量，小于该数量的不能成为一个聚合，默认为2<br />
114          *    isAverangeCenter {Boolean} 聚合点的落脚位置是否是所有聚合在内点的平均值，默认为否，落脚在聚合内的第一个点<br />
115          *    styles {Array<IconStyle>} 自定义聚合后的图标风格，请参考TextIconOverlay类<br />
116          */
117         BMapLib.MarkerClusterer = function(map, options){
118             if (!map){
119                 return;
120             }
121             this._map = map;
122             this._markers = [];
123             this._clusters = [];
124              
125             var opts = options || {};
126             this._gridSize = opts["gridSize"] || 60;
127             this._maxZoom = opts["maxZoom"] || 18;
128             this._minClusterSize = opts["minClusterSize"] || 2;           
129             this._isAverageCenter = false;
130             if (opts['isAverageCenter'] != undefined) {
131                 this._isAverageCenter = opts['isAverageCenter'];
132             }    
133             this._styles = opts["styles"] || [];
134          
135             var that = this;
136             this._map.addEventListener("zoomend",function(){
137                 that._redraw();     
138             });
139      
140             this._map.addEventListener("moveend",function(){
141                  that._redraw();     
142             });
143  
144             var mkrs = opts["markers"];
145             isArray(mkrs) && this.addMarkers(mkrs);
146         };
147  
148     /**
149      * 添加要聚合的标记数组。
150      * @param {Array<Marker>} markers 要聚合的标记数组
151      *
152      * @return 无返回值。
153      */
154     MarkerClusterer.prototype.addMarkers = function(markers){
155         for(var i = 0, len = markers.length; i <len ; i++){
156             this._pushMarkerTo(markers[i]);
157         }
158         this._createClusters();   
159     };
160  
161     /**
162      * 把一个标记添加到要聚合的标记数组中
163      * @param {BMap.Marker} marker 要添加的标记
164      *
165      * @return 无返回值。
166      */
167     MarkerClusterer.prototype._pushMarkerTo = function(marker){
168         var index = indexOf(marker, this._markers);
169         if(index === -1){
170             marker.isInCluster = false;
171             this._markers.push(marker);//Marker拖放后enableDragging不做变化，忽略
172         }
173     };
174  
175     /**
176      * 添加一个聚合的标记。
177      * @param {BMap.Marker} marker 要聚合的单个标记。
178      * @return 无返回值。
179      */
180     MarkerClusterer.prototype.addMarker = function(marker) {
181         this._pushMarkerTo(marker);
182         this._createClusters();
183     };
184  
185     /**
186      * 根据所给定的标记，创建聚合点，并且遍历所有聚合点
187      * @return 无返回值
188      */
189     MarkerClusterer.prototype._createClusters = function(){
190         var mapBounds = this._map.getBounds();
191         var extendedBounds = getExtendedBounds(this._map, mapBounds, this._gridSize);
192         for(var i = 0, marker; marker = this._markers[i]; i++){
193             if(!marker.isInCluster && extendedBounds.containsPoint(marker.getPosition()) ){ 
194                 this._addToClosestCluster(marker);                
195             }
196         }
197 
198         var len = this._markers.length;
199         for (var i = 0; i < len; i++) {
200             if(this._clusters[i]){
201                 this._clusters[i].render();
202             }
203         }
204     };
205  
206     /**
207      * 根据标记的位置，把它添加到最近的聚合中
208      * @param {BMap.Marker} marker 要进行聚合的单个标记
209      *
210      * @return 无返回值。
211      */
212     MarkerClusterer.prototype._addToClosestCluster = function (marker){
213         var distance = 4000000;
214         var clusterToAddTo = null;
215         var position = marker.getPosition();
216         for(var i = 0, cluster; cluster = this._clusters[i]; i++){
217             var center = cluster.getCenter();
218             if(center){
219                 var d = this._map.getDistance(center, marker.getPosition());
220                 if(d < distance){
221                     distance = d;
222                     clusterToAddTo = cluster;
223                 }
224             }
225         }
226      
227         if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)){
228             clusterToAddTo.addMarker(marker);
229         } else {
230             var cluster = new Cluster(this);
231             cluster.addMarker(marker);            
232             this._clusters.push(cluster);
233         }    
234     };
235  
236     /**
237      * 清除上一次的聚合的结果
238      * @return 无返回值。
239      */
240     MarkerClusterer.prototype._clearLastClusters = function(){
241         for(var i = 0, cluster; cluster = this._clusters[i]; i++){            
242             cluster.remove();
243         }
244         this._clusters = [];//置空Cluster数组
245         this._removeMarkersFromCluster();//把Marker的cluster标记设为false
246     };
247  
248     /**
249      * 清除某个聚合中的所有标记
250      * @return 无返回值
251      */
252     MarkerClusterer.prototype._removeMarkersFromCluster = function(){
253         for(var i = 0, marker; marker = this._markers[i]; i++){
254             marker.isInCluster = false;
255         }
256     };
257     
258     /**
259      * 把所有的标记从地图上清除
260      * @return 无返回值
261      */
262     MarkerClusterer.prototype._removeMarkersFromMap = function(){
263         for(var i = 0, marker; marker = this._markers[i]; i++){
264             marker.isInCluster = false;
265             tmplabel = marker.getLabel();
266             this._map.removeOverlay(marker);       
267             marker.setLabel(tmplabel);
268         }
269     };
270  
271     /**
272      * 删除单个标记
273      * @param {BMap.Marker} marker 需要被删除的marker
274      *
275      * @return {Boolean} 删除成功返回true，否则返回false
276      */
277     MarkerClusterer.prototype._removeMarker = function(marker) {
278         var index = indexOf(marker, this._markers);
279         if (index === -1) {
280             return false;
281         }
282         tmplabel = marker.getLabel();
283         this._map.removeOverlay(marker);
284         marker.setLabel(tmplabel);
285         this._markers.splice(index, 1);
286         return true;
287     };
288  
289     /**
290      * 删除单个标记
291      * @param {BMap.Marker} marker 需要被删除的marker
292      *
293      * @return {Boolean} 删除成功返回true，否则返回false
294      */
295     MarkerClusterer.prototype.removeMarker = function(marker) {
296         var success = this._removeMarker(marker);
297         if (success) {
298             this._clearLastClusters();
299             this._createClusters();
300         }
301         return success;
302     };
303      
304     /**
305      * 删除一组标记
306      * @param {Array<BMap.Marker>} markers 需要被删除的marker数组
307      *
308      * @return {Boolean} 删除成功返回true，否则返回false
309      */
310     MarkerClusterer.prototype.removeMarkers = function(markers) {
311         var success = false;
312         for (var i = 0; i < markers.length; i++) {
313             var r = this._removeMarker(markers[i]);
314             success = success || r; 
315         }
316  
317         if (success) {
318             this._clearLastClusters();
319             this._createClusters();
320         }
321         return success;
322     };
323  
324     /**
325      * 从地图上彻底清除所有的标记
326      * @return 无返回值
327      */
328     MarkerClusterer.prototype.clearMarkers = function() {
329         this._clearLastClusters();
330         this._removeMarkersFromMap();
331         this._markers = [];
332     };
333  
334     /**
335      * 重新生成，比如改变了属性等
336      * @return 无返回值
337      */
338     MarkerClusterer.prototype._redraw = function () {
339         this._clearLastClusters();
340         this._createClusters();
341     };
342  
343     /**
344      * 获取网格大小
345      * @return {Number} 网格大小
346      */
347     MarkerClusterer.prototype.getGridSize = function() {
348         return this._gridSize;
349     };
350  
351     /**
352      * 设置网格大小
353      * @param {Number} size 网格大小
354      * @return 无返回值
355      */
356     MarkerClusterer.prototype.setGridSize = function(size) {
357         this._gridSize = size;
358         this._redraw();
359     };
360  
361     /**
362      * 获取聚合的最大缩放级别。
363      * @return {Number} 聚合的最大缩放级别。
364      */
365     MarkerClusterer.prototype.getMaxZoom = function() {
366         return this._maxZoom;       
367     };
368  
369     /**
370      * 设置聚合的最大缩放级别
371      * @param {Number} maxZoom 聚合的最大缩放级别
372      * @return 无返回值
373      */
374     MarkerClusterer.prototype.setMaxZoom = function(maxZoom) {
375         this._maxZoom = maxZoom;
376         this._redraw();
377     };
378  
379     /**
380      * 获取聚合的样式风格集合
381      * @return {Array<IconStyle>} 聚合的样式风格集合
382      */
383     MarkerClusterer.prototype.getStyles = function() {
384         return this._styles;
385     };
386  
387     /**
388      * 设置聚合的样式风格集合
389      * @param {Array<IconStyle>} styles 样式风格数组
390      * @return 无返回值
391      */
392     MarkerClusterer.prototype.setStyles = function(styles) {
393         this._styles = styles;
394         this._redraw();
395     };
396  
397     /**
398      * 获取单个聚合的最小数量。
399      * @return {Number} 单个聚合的最小数量。
400      */
401     MarkerClusterer.prototype.getMinClusterSize = function() {
402         return this._minClusterSize;
403     };
404  
405     /**
406      * 设置单个聚合的最小数量。
407      * @param {Number} size 单个聚合的最小数量。
408      * @return 无返回值。
409      */
410     MarkerClusterer.prototype.setMinClusterSize = function(size) {
411         this._minClusterSize = size;
412         this._redraw();
413     };
414  
415     /**
416      * 获取单个聚合的落脚点是否是聚合内所有标记的平均中心。
417      * @return {Boolean} true或false。
418      */
419     MarkerClusterer.prototype.isAverageCenter = function() {
420         return this._isAverageCenter;
421     };
422  
423     /**
424      * 获取聚合的Map实例。
425      * @return {Map} Map的示例。
426      */
427     MarkerClusterer.prototype.getMap = function() {
428       return this._map;
429     };
430  
431     /**
432      * 获取所有的标记数组。
433      * @return {Array<Marker>} 标记数组。
434      */
435     MarkerClusterer.prototype.getMarkers = function() {
436         return this._markers;
437     };
438  
439     /**
440      * 获取聚合的总数量。
441      * @return {Number} 聚合的总数量。
442      */
443     MarkerClusterer.prototype.getClustersCount = function() {
444         var count = 0;
445         for(var i = 0, cluster; cluster = this._clusters[i]; i++){
446             cluster.isReal() && count++;     
447         }
448         return count;
449     };
450  
451     /**
452      * @ignore
453      * Cluster
454      * @class 表示一个聚合对象，该聚合，包含有N个标记，这N个标记组成的范围，并有予以显示在Map上的TextIconOverlay等。
455      * @constructor
456      * @param {MarkerClusterer} markerClusterer 一个标记聚合器示例。
457      */
458     function Cluster(markerClusterer){
459         this._markerClusterer = markerClusterer;
460         this._map = markerClusterer.getMap();
461         this._minClusterSize = markerClusterer.getMinClusterSize();
462         this._isAverageCenter = markerClusterer.isAverageCenter();
463         this._center = null;//落脚位置
464         this._markers = [];//这个Cluster中所包含的markers
465         this._gridBounds = null;//以中心点为准，向四边扩大gridSize个像素的范围，也即网格范围
466         this._isReal = false; //真的是个聚合
467      
468         this._clusterMarker = new BMapLib.TextIconOverlay(this._center, this._markers.length, {"styles":this._markerClusterer.getStyles()});
469         //this._map.addOverlay(this._clusterMarker);
470     }
471     
472     /**
473      * 向该聚合添加一个标记。
474      * @param {Marker} marker 要添加的标记。
475      * @return 无返回值。
476      */
477     Cluster.prototype.addMarker = function(marker){
478         if(this.isMarkerInCluster(marker)){
479             return false;
480         }//也可用marker.isInCluster判断,外面判断OK，这里基本不会命中
481      
482         if (!this._center){
483             this._center = marker.getPosition();
484             this.updateGridBounds();//
485         } else {
486             if(this._isAverageCenter){
487                 var l = this._markers.length + 1;
488                 var lat = (this._center.lat * (l - 1) + marker.getPosition().lat) / l;
489                 var lng = (this._center.lng * (l - 1) + marker.getPosition().lng) / l;
490                 this._center = new BMap.Point(lng, lat);
491                 this.updateGridBounds();
492             }//计算新的Center
493         }
494      
495         marker.isInCluster = true;
496         this._markers.push(marker);
497     };
498     
499     /**
500      * 进行dom操作
501      * @return 无返回值
502      */
503     Cluster.prototype.render = function(){
504         var len = this._markers.length;
505          
506         if (len < this._minClusterSize) {
507             for (var i = 0; i < len; i++) {
508                 this._map.addOverlay(this._markers[i]);
509             }
510         } else {
511             this._map.addOverlay(this._clusterMarker);
512             this._isReal = true;
513             this.updateClusterMarker();
514         }
515     }
516 
517     /**
518      * 判断一个标记是否在该聚合中。
519      * @param {Marker} marker 要判断的标记。
520      * @return {Boolean} true或false。
521      */
522     Cluster.prototype.isMarkerInCluster= function(marker){
523         if (this._markers.indexOf) {
524             return this._markers.indexOf(marker) != -1;
525         } else {
526             for (var i = 0, m; m = this._markers[i]; i++) {
527                 if (m === marker) {
528                     return true;
529                 }
530             }
531         }
532         return false;
533     };
534  
535     /**
536      * 判断一个标记是否在该聚合网格范围中。
537      * @param {Marker} marker 要判断的标记。
538      * @return {Boolean} true或false。
539      */
540     Cluster.prototype.isMarkerInClusterBounds = function(marker) {
541         return this._gridBounds.containsPoint(marker.getPosition());
542     };
543      
544     Cluster.prototype.isReal = function(marker) {
545         return this._isReal;
546     };
547  
548     /**
549      * 更新该聚合的网格范围。
550      * @return 无返回值。
551      */
552     Cluster.prototype.updateGridBounds = function() {
553         var bounds = new BMap.Bounds(this._center, this._center);
554         this._gridBounds = getExtendedBounds(this._map, bounds, this._markerClusterer.getGridSize());
555     };
556  
557     /**
558      * 更新该聚合的显示样式，也即TextIconOverlay。
559      * @return 无返回值。
560      */
561     Cluster.prototype.updateClusterMarker = function () {
562         if (this._map.getZoom() > this._markerClusterer.getMaxZoom()) {
563             this._clusterMarker && this._map.removeOverlay(this._clusterMarker);
564             for (var i = 0, marker; marker = this._markers[i]; i++) {
565                 this._map.addOverlay(marker);
566             }
567             return;
568         }
569  
570         if (this._markers.length < this._minClusterSize) {
571             this._clusterMarker.hide();
572             return;
573         }
574  
575         this._clusterMarker.setPosition(this._center);
576          
577         this._clusterMarker.setText(this._markers.length);
578  
579         var thatMap = this._map;
580         var thatBounds = this.getBounds();
581         this._clusterMarker.addEventListener("click", function(event){
582             thatMap.setViewport(thatBounds);
583         });
584  
585     };
586  
587     /**
588      * 删除该聚合。
589      * @return 无返回值。
590      */
591     Cluster.prototype.remove = function(){
592         for (var i = 0, m; m = this._markers[i]; i++) {
593             tmplabel = this._markers[i].getLabel(); 
594             this._markers[i].getMap() && this._map.removeOverlay(this._markers[i])
595             this._markers[i].setLabel(tmplabel)
596         }//清除散的标记点
597         this._map.removeOverlay(this._clusterMarker);
598         this._markers.length = 0;
599         delete this._markers;
600     }
601  
602     /**
603      * 获取该聚合所包含的所有标记的最小外接矩形的范围。
604      * @return {BMap.Bounds} 计算出的范围。
605      */
606     Cluster.prototype.getBounds = function() {
607         var bounds = new BMap.Bounds(this._center,this._center);
608         for (var i = 0, marker; marker = this._markers[i]; i++) {
609             bounds.extend(marker.getPosition());
610         }
611         return bounds;
612     };
613  
614     /**
615      * 获取该聚合的落脚点。
616      * @return {BMap.Point} 该聚合的落脚点。
617      */
618     Cluster.prototype.getCenter = function() {
619         return this._center;
620     };
621  
622 })();