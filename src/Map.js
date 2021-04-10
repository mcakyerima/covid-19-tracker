import React from 'react';
import {Map as LeafletMap, TileLayer } from 'react-leaflet';


function Map() {
    return (
        <div className="map">
            <LeafletMap>
                <TileLayer
                url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution = '&copy; <a href="http://osm.org/copyright"> OpenStreetMap</a> contributors'/>

            </LeafletMap>
            <h2>i am a map</h2>
            
        </div>
    )
}

export default Map
