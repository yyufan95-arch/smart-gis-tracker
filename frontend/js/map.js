let map;
// 设定 A, B, C, D 的经纬度 (以全州市附近为例)
const pathCoords = [
    { id: 'A', lat: 35.830, lng: 127.120 },
    { id: 'B', lat: 35.815, lng: 127.140 },
    { id: 'C', lat: 35.845, lng: 127.155 },
    { id: 'D', lat: 35.825, lng: 127.135 }
];

function initMap() {
    console.log("正在初始化地图...");
    
    // 1. 创建地图
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: pathCoords[0],
        mapTypeControl: true,
        streetViewControl: false
    });

    // 2. 绘制红色连线
    const tourPath = new google.maps.Polyline({
        path: pathCoords,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 3,
        map: map
    });

    // 3. 放置 A, B, C, D 标记
    pathCoords.forEach(point => {
        new google.maps.Marker({
            position: { lat: point.lat, lng: point.lng },
            map: map,
            label: point.id,
            title: "位置: " + point.id
        });
    });
}
