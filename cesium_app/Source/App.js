var viewer = new Cesium.Viewer('cesiumContainer');

viewer.extend(Cesium.viewerDragDropMixin);
//viewer.dataSources.add(Cesium.KmlDataSource.load("aac_8.kml"));
viewer.dataSources.add(Cesium.KmlDataSource.load("http://aacyagishita.github.io/20150708_test/cesium-starter-app_Iknowshachu/Source/test7.kml"));
