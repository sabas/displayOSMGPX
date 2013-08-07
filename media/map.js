function initMap(lat, lon, zoom)
{
	//var layerurl = 'http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png';
	var layerurl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
	var	attr = 'Map Data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var tile = new L.TileLayer(layerurl, {maxZoom: 18, attribution: attr});

	var map = new L.Map('map');
	map.setView(new L.LatLng(lat, lon), zoom);
	map.addLayer(tile);
	return map;
}

	var MapIcon = L.Icon.extend({
	options:{
	    iconSize: [50, 30],
	    popupAnchor: [0, -25],
		iconAnchor:   [25, 30]
		}
	});
	
function putMarker(map, iconUrl, lat, lon, text)
{
	var iconInstance;
	if (iconUrl=='') iconInstance=new MapIcon({iconUrl: iconUrl});
	else iconInstance=new L.Icon();
	
	return L.marker([lat,lon], {icon: iconInstance}).bindPopup(text).addTo(map);
}

function removeLayer(map,layer)
{
		map.removeLayer(layer);
}

function setCenter(map,marker,zoom)
{
	var latlng=marker.getLatLng();
	map.setView(latlng, zoom);
}

function makeColor(color,fillColor,opacity)
{
	return {
		color: color,
		fillColor: fillColor,
		fillOpacity: opacity
	};
}

function putCircle(map, lat, lon, radius,colObj)
{
	return L.circle([lat, lon], radius, colObj).addTo(map);
}

function addTrack(url)
{
var gpx= new L.GPX(url);
map.addLayer(gpx);
return gpx;
}
