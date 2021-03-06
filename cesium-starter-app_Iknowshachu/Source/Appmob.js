var viewer = new Cesium.Viewer('cesiumContainer');

var camera_start = Cesium.Cartesian3.fromDegrees(140, 36, 1000);
var camera_direction = Cesium.Cartesian3.fromDegrees(0, 0, 0);

viewer.extend(Cesium.viewerDragDropMixin);

viewer.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z); 
viewer.dataSources.add(Cesium.CzmlDataSource.load('https://aacyagishita.github.io/20150708_test/Test7.czml'));
viewer.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z);    

