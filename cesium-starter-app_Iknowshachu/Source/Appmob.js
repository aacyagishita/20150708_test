var viewer = new Cesium.Viewer('cesiumContainer');

    var camera_start = Cesium.Cartesian3.fromDegrees(139.0, 35.0, 1000);
    var camera_direction = Cesium.Cartesian3.fromDegrees(-75.0, 70.0, 0);

Sandcastle.addToolbarButton('Vehicle', function() {
    viewer.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z); 
    viewer.dataSources.add(Cesium.CzmlDataSource.load('https://aacyagishita.github.io/20150708_test/Test7.czml'));
    viewer.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z);    
});

Sandcastle.reset = function() {
    viewer.dataSources.removeAll();
    viewer.homeButton.viewModel.command();
    viewer.camera.lookAt(camera_start, camera_direction, Cesium.Cartesian3.UNIT_Z);    
};

