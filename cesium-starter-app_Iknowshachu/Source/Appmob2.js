//var viewer = new Cesium.Viewer('cesiumContainer', {
// imageryProvider: new Cesium.OpenStreetMapImageryProvider({
// url: 'http://cyberjapandata.gsi.go.jp/xyz/std/', credit: 'ínóùâ@É^ÉCÉã'}),
// baseLayerPicker: false });
//, sceneMode : Cesium.SceneMode.SCENE2D

var viewer = new Cesium.Viewer('cesiumContainer', {
  imageryProvider: new Cesium.OpenStreetMapImageryProvider({
    url: 'http://cyberjapandata.gsi.go.jp/xyz/std/',
    credit: new Cesium.Credit('çëìyínóùâ@', '', 'http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html')
  }),
  baseLayerPicker: false
});

viewer.scene.camera.setPositionCartographic(Cesium.Cartographic.fromDegrees(140.00, 36.14, 20000000.0));

//viewer.scene.terrainProvider = new Cesium.CesiumTerrainProvider({
//  url: 'http://cesiumjs.org/stk-terrain/tilesets/world/tiles'});

var camera_start = Cesium.Cartesian3.fromDegrees(140, 36, 1000);
var camera_direction = Cesium.Cartesian3.fromDegrees(0, 0, 0);

viewer.extend(Cesium.viewerDragDropMixin);

viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(139.7, 35.8, 100000.0)
});

//viewer.camera.positionCartographic(36,140,1000); 

//viewer.camera.position(camera_start); 
//viewer.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z); 
viewer.dataSources.add(Cesium.CzmlDataSource.load('https://aacyagishita.github.io/20150708_test/Test8.czml'));
//viewer.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z);    

