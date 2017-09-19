<template>
    <div>
        <button v-on:click="toggleOverlay">Toggle overlay</button>
        <button v-on:click="toggleMarker">Toggle marker</button>
        <button v-on:click="togglePolyline">Toggle polyline</button>
        <button v-on:click="togglePolygon">Toggle polygon</button>
        <button v-on:click="toggleKML">Toggle KML</button>
    <div class="google-map" :id="mapName"></div></div>  
</template>

<script>
import mapstyles from '../assets/map.js';
import Vue from 'vue'

export default {
    name: "google-maps",
    props: ['name'],
    data: function () {
      return {
        mapName: this.name + "-map",
        map: null,
        overlay: null,
        markers: [],
        polyline: null,
        polygon: null,
        kml: null
        }
    },
    mounted: function () {
        // load the map
        const element = document.getElementById(this.mapName)
        const options = {
          zoom: 14,
          center: new google.maps.LatLng(51.501527,-0.1921837)
        }
        this.map = new google.maps.Map(element, options);  
        // set the chosen map style. Styles are in the file map.js
        this.setStyle();
        
        //load the overlay
        var imageBounds = {
            north: 51.51335453974668,
            south: 51.49231033811266,
            east: -0.15851916406245437,
            west: -0.22377228588868547
        };
  
        console.log(require('../assets/map.png'));
        this.overlay = new google.maps.GroundOverlay(
//              'resources/map.png',
              require('../assets/map.png'),
              imageBounds);

        contentfulClient.getEntries({
            content_type: 'bikespot'
        })
        .then(entries => {
            entries.items.forEach((item, index) => {

                //create marker
                let icon = item.fields.icon? item.fields.icon.fields.file : "";
                let marker =  new google.maps.Marker({
                    position: {lat: item.fields.lat, lng: item.fields.lng},
                    icon: icon
                    
                });
    
                // create infowindow
                this.configureInfoWindow(`<div id="info-window${index}"><info-window title="${item.fields.title}" 
                 content="${item.fields.summary}" portrait="${item.fields.portrait.fields.file.url}" id="${item.sys.id}" >
                 </info-window></div>`, marker, index);
                this.markers.push(marker);
            })
        });
        
        // create a polyline
        const plcoords = [
            {lat: 51.513, lng: -0.223},
            {lat: 51.51, lng: -0.21},
            {lat: 51.50, lng: -0.20},
            {lat: 51.49, lng: -0.168}
          ];
        this.polyline = new google.maps.Polyline({
            path: plcoords,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        // create a polygon
        const pgcoords = [
            {lat: 51.513, lng: -0.223},
            {lat: 51.51, lng: -0.21},
            {lat: 51.50, lng: -0.20}
            ];
        this.polygon = new google.maps.Polygon({
            path: pgcoords,
            geodesic: true,
            strokeColor: '#42cef4',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

        contentfulClient.getAsset("6I6fDnGC7S8mGSeG2GEWio")
        .then(entry => {
            //show a kml file
            this.kml = new google.maps.KmlLayer({
                url: "https:" +entry.fields.file.url
            });
        })
    },
    methods: {
        setStyle: function() {
            this.map.setOptions({styles: window.mapstyles["retro"]});
        },
        toggleOverlay: function(){
            if (this.overlay.map) {
                this.overlay.setMap(null);
            } else {
                this.overlay.setMap(this.map);
            }           
        },
        toggleMarker: function(){
            if (this.markers.length > 0 && this.markers[0].map) {
                this.markers.forEach(marker => {
                    marker.setMap(null);
                });
            } else {
                this.markers.forEach(marker => {
                    marker.setMap(this.map);
                });
            }           
        },
        togglePolyline: function(){
            if (this.polyline.map) {
                this.polyline.setMap(null);
            } else {
                this.polyline.setMap(this.map);
            }           
        },
        togglePolygon: function(){
            if (this.polygon.map) {
                this.polygon.setMap(null);
            } else {
                this.polygon.setMap(this.map);
            }           
        },
        toggleKML: function(){
            if (this.kml.map) {
                this.kml.setMap(null);
            } else {
                this.kml.setMap(this.map);
            }           
        },
        configureInfoWindow: function(contentString, marker, index) {
            let infowindow = new google.maps.InfoWindow({
                content: contentString
            });
            
            
            marker.addListener('click', event => { infowindow.open(this.map, marker)});

            google.maps.event.addListener(infowindow, 'domready', function() {
                // enable Vue inside the the infowindow
                window.app2 = new Vue({
                    router
                }).$mount("#info-window"+index);
            });
                    
        }
    }  
}
</script>

<style scoped>
    .google-map {
    width: 80vw;
    height: 80vh;
    margin: 0 auto;
    background: gray;
    }

</style>
